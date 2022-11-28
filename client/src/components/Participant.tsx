import { useState, useEffect } from "react";

// interface Participants {
// 	participants: string;
// 	setParticipants: Dispatch<SetStateAction<string>>;
// 	id: Number;
// }
const Participant = ({ participants, setParticipants, id }: any) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setParticipants([...participants, { id, name, surname, email }]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setParticipants((obj: any) =>
			obj.map((oldData: any) =>
				oldData.id === id ? { id, name, surname, email } : oldData
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, surname, email]);

	return (
		<div className="uczestnik" key={id}>
			<h1>UCZEŃ {id}</h1>
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

export default Participant;
