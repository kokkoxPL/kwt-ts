import { Router, Request, Response } from "express";
import { createConnection } from "mysql2/promise";
import validator from "validator";

const router = Router();

interface Data {
	captcha: string;
	participants: object[];
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
			if (response.status === 200) {
				console.log("Successful");
			} else {
				console.log("Failed");
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

	console.log(data.phone.toString().length);
	if (data.phone.toString().length !== 9) {
		errorFields.push("phone");
	}

	if (errorFields.length) {
		return res.status(400).json({ errorFields });
	}

	const connection = createConnection({
		host: "localhost",
		user: "root",
		database: "kwt",
	});

	(await connection)
		.query(
			`INSERT INTO opiekunowie 
			(imie, nazwisko, szkola, adres_szkoly, email, tel, typ) 
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
			Object.values(data)
		)
		.then(() => res.sendStatus(200))
		.catch((err: Error) => res.status(404).json({ error: err.message, errorFields }));
});

router.get("/admin", async (req: Request, res: Response) => {
	const connection = await createConnection({
		host: "localhost",
		user: "root",
		database: "kwt",
	});

	const [rows] = await connection.query(`SELECT * FROM opiekunowie`);
	res.json(rows);
});

export default router;
