import "dotenv/config";
import express, { Express } from "express";
import { connect } from "mongoose";
import { json, urlencoded } from "body-parser";
import routes from "./route";

const app: Express = express();
app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api", routes);

connect(process.env.MONGODB_URI!)
	.then(() => app.listen(process.env.PORT))
	.catch((err: Error) => console.error(err));
