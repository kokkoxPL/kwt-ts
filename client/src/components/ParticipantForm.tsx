import { useState, useEffect } from "react";

import { Participant, ParticipantArg } from "../interfaces";

const ParticipantForm = ({ participants, setParticipants, id }: ParticipantArg) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setParticipants([...participants, { id, name, surname, email }]);
	}, []);

	useEffect(() => {
		setParticipants((obj: Participant[]) =>
			obj.map((oldData: Participant) =>
				oldData.id === id ? { id, name, surname, email } : oldData
			)
		);
	}, [name, surname, email]);

	return (
		<div className="uczestnik">
			<h1>UCZEŃ {id.toString()}</h1>
			<div className="participant">
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
					autoFocus
					required
				/>
				<span>Imię</span>
			</div>
			<div className="participant">
				<input type="text" onChange={(e) => setSurname(e.target.value)} value={surname} required />
				<span>Nazwisko</span>
			</div>
			<div className="participant">
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
				<span>E-mail</span>
			</div>
		</div>
	);
};

export default ParticipantForm;
