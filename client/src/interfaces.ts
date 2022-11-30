import { Dispatch, SetStateAction } from "react";

interface Participant {
	id: Number;
	name: string;
	surname: string;
	email: string;
}

interface Data {
	_id: string;
	name: string;
	surname: string;
	school: string;
	schoolAddress: string;
	email: string;
	phone: Number;
	type: string;
	participants: Participant[];
}

interface Gallery {
	images: Img[];
}

interface Img {
	img: Object;
}

interface ParticipantArg {
	participants: Participant[];
	setParticipants: Dispatch<SetStateAction<Participant[]>>;
	id: Number;
}

export type { Participant, Data, Gallery, Img, ParticipantArg };
