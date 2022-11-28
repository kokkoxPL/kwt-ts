import { Router, Request, Response } from "express";
import Form from "./formModel";
import validator from "validator";

const router = Router();

interface Data {
	captcha: string;
	name: string;
	email: string;
	school: string;
	schoolAddress: string;
	phone: number;
	type: string;
	participants: Object[];
}

router.post("/form", (req: Request, res: Response) => {
	const { captcha, ...data }: Data = req.body;

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

	if (data.phone.toString().length !== 9) {
		errorFields.push("phone");
	}

	if (errorFields.length) {
		return res.status(400).json({ errorFields });
	}

	const form = new Form(data);
	form
		.save()
		.then(() => res.json({}))
		.catch((err: Error) => {
			console.log(err.message);
			return res.status(404).json({ error: err.message, errorFields });
		});
});

router.get("/admin", (req: Request, res: Response) => {
	Form.find()
		.select("name surname school schoolAddress email phone participants type")
		.then((result: Object) => res.json(result))
		.catch((err: Error) => console.log(err));
});

router.use((req: Request, res: Response) => {
	res.status(418).json({ error: "I'm a teapot" });
});

export default router;
