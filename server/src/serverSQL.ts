import "dotenv/config";
import express, { Express } from "express";
import { createConnection } from "mysql2/promise";
import compression from "compression";
import { json, urlencoded } from "body-parser";

import routes from "./routeSQL";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(compression());

const createDatabase = async () => {
	let connection = await createConnection({
		host: process.env.host,
		user: process.env.user,
	});

	connection.query("CREATE DATABASE IF NOT EXISTS kwt");

	connection = await createConnection({
		host: process.env.host,
		user: process.env.user,
		database: process.env.database,
	});

	connection.query(
		`CREATE TABLE IF NOT EXISTS opiekunowie
    (id int AUTO_INCREMENT PRIMARY KEY,
    imie varchar(30), nazwisko varchar(30),
    szkola varchar(150), adres_szkoly varchar(30),
    email varchar(50), tel int(9), typ varchar(30))`
	);

	connection.query(
		`CREATE TABLE IF NOT EXISTS uczniowie
    (id int AUTO_INCREMENT PRIMARY KEY,
    imie varchar(30), nazwisko varchar(30),
		email varchar(50), opiekun_id int)`
	);
};

createDatabase();

app.use("/api", routes);

app.listen(process.env.PORT);
