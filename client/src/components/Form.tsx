import Participant from "./Participant";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [school, setSchool] = useState("");
	const [schoolAddress, setSchoolAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [type, setType] = useState("Modelarstwo");
	const [participants, setParticipants] = useState([]);
	const [participantsNumber, setParticipantsNumber] = useState(1);
	const [errorFields, setErrorFields] = useState<String[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [captcha, setCaptcha] = useState("");
	const reRef = useRef<ReCAPTCHA>(null);
	const navigate = useNavigate();

	const change = () => {
		setCaptcha(reRef.current?.getValue() as string);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const data = {
			name,
			surname,
			school,
			schoolAddress,
			email,
			phone,
			type,
			participants,
			captcha,
		};

		const api = "/api/form";
		const body = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		setIsSubmitting(true);
		const response = await fetch(api, body);
		const json = await response.json();

		if (!response.ok) {
			console.log(json);
			setErrorFields(json.errorFields);
		} else {
			navigate("/");
		}

		setIsSubmitting(false);
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<h1>OPIEKUN-SZKOŁA</h1>
				<div className="inputs">
					<div className="school">
						<input
							type="text"
							placeholder="Szkoła"
							onChange={(e) => setSchool(e.target.value)}
							value={school}
							className={errorFields.includes("school") ? "error" : ""}
							required
						/>
						<input
							type="text"
							placeholder="Adres szkoły"
							onChange={(e) => setSchoolAddress(e.target.value)}
							value={schoolAddress}
							className={errorFields.includes("schoolAddress") ? "error" : ""}
							required
						/>
						<div className="label">
							<label htmlFor="rodzaj">Rodzaj konkursu:</label>
							<select
								id="rodzaj"
								onChange={(e) => setType(e.target.value)}
								value={type}
								className={errorFields.includes("") ? "error" : ""}
								required
							>
								<option value="Modelarstwo">Modelarstwo</option>
								<option value="Interdyscypliny">Interdyscypliny</option>
								<option value="Praca_własna">Praca własna</option>
							</select>
						</div>
					</div>
					<div className="personal">
						<input
							type="text"
							placeholder="Imię opiekuna"
							onChange={(e) => setName(e.target.value)}
							value={name}
							className={errorFields.includes("name") ? "error" : ""}
							required
						/>
						<input
							type="text"
							placeholder="Nazwisko opiekuna"
							onChange={(e) => setSurname(e.target.value)}
							value={surname}
							className={errorFields.includes("surname") ? "error" : ""}
							required
						/>
						<input
							type="email"
							placeholder="E-mail"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							className={errorFields.includes("email") ? "error" : ""}
							required
						/>
						<input
							type="tel"
							placeholder="Numer telefonu"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
							className={errorFields.includes("phone") ? "error" : ""}
							required
						/>
					</div>
				</div>

				<div className="uczniowie">
					<h1>UCZNIOWIE</h1>
					<hr className="solid" />
					<div className="uczestnicy">
						{[...Array(participantsNumber)].map((item, index) => (
							<Participant
								key={index + 1}
								participants={participants}
								setParticipants={setParticipants}
								id={index + 1}
							/>
						))}
						{participantsNumber < 5 && (
							<div
								className="uczestnik"
								style={{ opacity: 0.4 }}
								onClick={() => setParticipantsNumber(participantsNumber + 1)}
							>
								<h1>UCZEŃ {participantsNumber + 1}</h1>
								<input type="text" placeholder="Imię" />
								<input type="text" placeholder="Nazwisko" />
								<input type="email" placeholder="E-mail" />
							</div>
						)}
					</div>
				</div>
				<ReCAPTCHA
					className="captcha"
					onChange={change}
					sitekey={process.env.REACT_APP_RECAPTCHA as string}
					ref={reRef}
				/>
				<input
					type="submit"
					value="Zarejestruj"
					disabled={!captcha || isSubmitting}
				/>
			</form>
		</div>
	);
};

export default Form;
