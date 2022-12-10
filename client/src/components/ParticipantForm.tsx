import { useState, useEffect } from "react";

import { Participant, ParticipantArg } from "../interfaces";

const ParticipantForm = ({ participants, setParticipants, id }: ParticipantArg) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setParticipants([...participants, { id, name, surname, email }]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setParticipants((obj: Participant[]) =>
			obj.map((oldData: Participant) =>
				oldData.id === id ? { id, name, surname, email } : oldData
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, surname, email]);

	return (
		<div className="uczestnik">
			<h1>UCZEŃ {id.toString()}</h1>
			<input
				type="text"
				placeholder="Imię"
				onChange={(e) => setName(e.target.value)}
				value={name}
				autoFocus
				required
			/>
			<input
				type="text"
				placeholder="Nazwisko"
				onChange={(e) => setSurname(e.target.value)}
				value={surname}
				required
			/>
			<input
				type="email"
				placeholder="E-mail"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
		</div>
	);
};

export default ParticipantForm;
