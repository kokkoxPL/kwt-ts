import { Router, Request, Response } from "express";
import { createConnection } from "mysql2/promise";
import validator from "validator";

const router = Router();

interface Participants {
	id?: number;
	opiekun_id?: number;
	name: string;
	surname: string;
	email: string;
}

interface Data {
	captcha: string;
	participants: Participants[];
	name: string;
	surname: string;
	school: string;
	schoolAddress: string;
	email: string;
	phone: number;
	type: string;
}

router.post("/form", async (req: Request, res: Response) => {
	const { captcha, participants, ...data }: Data = req.body;

	if (!captcha) {
		return res.status(400).json({ err: "No captcha" });
	}

	const secret = process.env.RECAPTCHA_SECRET;
	const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha}`;

	fetch(verifyURL, { method: "POST" })
		.then((response) => {
			if (response.status !== 200) {
				return res.status(401).json({ captcha: "Failed" });
			}
		})
		.catch((err: Error) => res.status(500).json(err));

	const errorFields: string[] = [];

	for (const key in data) {
		if (!data[key as keyof typeof data]) {
			errorFields.push(key);
		}
	}

	if (!validator.isEmail(data.email)) {
		errorFields.push("email");
	}

	if (data.phone.toString().length !== 9) {
		errorFields.push("phone");
	}

	if (errorFields.length) {
		return res.status(400).json({ errorFields });
	}

	const connection = await createConnection({
		host: process.env.host,
		user: process.env.user,
		database: process.env.database,
	});

	connection
		.execute(
			`INSERT INTO opiekunowie 
			(imie, nazwisko, szkola, adres_szkoly, email, tel, typ) 
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
			Object.values(data)
		)
		.then((result) => {
			const id = Object.values(result[0])[2];

			participants.map((participant) => {
				delete participant.id;
				participant.opiekun_id = id;

				connection.execute(
					`INSERT INTO uczniowie
					(imie, nazwisko, email, opiekun_id)
					VALUES (?, ?, ?, ?)`,
					Object.values(participant)
				);
			});
		})
		.then(() => res.sendStatus(200))
		.catch(() => res.status(404).json({ errorFields }));
});

export default router;
