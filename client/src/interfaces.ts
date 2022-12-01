import { Dispatch, SetStateAction } from "react";

interface Data {
	_id: string;
	name: string;
	surname: string;
	school: string;
	schoolAddress: string;
	email: string;
	phone: number;
	type: string;
	participants: Participant[];
}

interface Participant {
	id: number;
	name: string;
	surname: string;
	email: string;
}

interface ImagesArg {
	images: { img: string }[];
}

interface ParticipantArg {
	participants: Participant[];
	setParticipants: Dispatch<SetStateAction<Participant[]>>;
	id: number;
}

export type { Data, Participant, ImagesArg, ParticipantArg };
