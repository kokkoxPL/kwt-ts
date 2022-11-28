import { Schema, model } from "mongoose";

const formSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	school: {
		type: String,
		required: true,
	},
	schoolAddress: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	participants: {
		type: Array,
		required: true,
	},
});

export default model("form", formSchema);
