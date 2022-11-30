import ApplicantList from "../components/ApplicantList";

function Admin() {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Applicants</h1>
			<hr></hr>
			<ApplicantList />
		</div>
	);
}

export default Admin;
