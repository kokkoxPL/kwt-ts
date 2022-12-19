import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

import { Data, Participant } from "../interfaces";

function ApplicantList() {
	const [data, setData] = useState<(Data & { _id: string })[]>([]);
	const [students, setStudent] = useState<Participant[]>([]);

	const teacherHeader = [
		{ label: "id", key: "_id" },
		{ label: "imie", key: "name" },
		{ label: "nazwisko", key: "surname" },
		{ label: "szkola", key: "school" },
		{ label: "adres_szkoly", key: "schoolAddress" },
		{ label: "email", key: "email" },
		{ label: "telefon", key: "phone" },
		{ label: "typ", key: "type" },
	];

	const studentHeader = [
		{ label: "opiekun_id", key: "teacher_id" },
		{ label: "imie", key: "name" },
		{ label: "nazwisko", key: "surname" },
		{ label: "email", key: "email" },
	];

	useEffect(() => {
		const getData = async () => {
			const response = await fetch("/api/admin").then((res) => res.json());
			setData(response);
			response.forEach((e: Data & { _id: string }) =>
				e.participants.forEach((i: Participant) =>
					setStudent(() => [...students, { teacher_id: e._id, ...i }])
				)
			);
		};
		getData();
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Surname</th>
						<th>School</th>
						<th>School Address</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					{data.map((data, i) => (
						<tr key={data._id}>
							<td>{i + 1}</td>
							<td>{data.name}</td>
							<td>{data.surname}</td>
							<td>{data.school}</td>
							<td>{data.schoolAddress}</td>
							<td>{data.phone.toString()}</td>
							<td>{data.email}</td>
							<td>{data.type}</td>
						</tr>
					))}
				</tbody>
			</table>
			<CSVLink headers={teacherHeader} data={data} filename={"Teacher.csv"}>
				Teachers
			</CSVLink>
			<br />
			<CSVLink headers={studentHeader} data={students} filename={"Student.csv"}>
				Students
			</CSVLink>
			;
		</>
	);
}

export default ApplicantList;
