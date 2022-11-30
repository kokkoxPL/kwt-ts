import { useState } from "react";

const Teapot = () => {
	const [error, setError] = useState();

	const getCoffee = async () => {
		const coffee = await fetch("/api").then((res) => res.json());
		setError(coffee.error);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<button style={{ width: "9vw", height: "6vh", fontSize: "1em" }} onClick={getCoffee}>
				Get Coffee
			</button>
			<br />
			<p style={{ fontSize: "2em" }}>{error}</p>
			{error && (
				<img
					style={{ width: "50%" }}
					src="https://www.pcgamesn.com/wp-content/uploads/2021/04/genshin-impact-teapot.jpg"
					alt="I'm a teapot"
				/>
			)}
		</div>
	);
};

export default Teapot;
