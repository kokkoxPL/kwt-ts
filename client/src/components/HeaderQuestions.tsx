// import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const HeaderQuestions = () => {
	const elements = [
		{
			img: "https://i.pinimg.com/originals/21/e2/e9/21e2e91953906c59c5ff215521e42dc1.jpg",
			head: "Lorem ipsum dolor sit amet ?",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate delectus unde magni culpa itaque quod doloribus cum non eum rem alias odio praesentium voluptatum sequi natus, magnam quasi necessitatibus labore quisquam. Excepturi aliquam distinctio, fuga odio odit soluta temporibus.",
			bg: "#070707",
			color: "#fff",
			headColor: "#fff",
		},

		{
			img: "https://i.pinimg.com/originals/b0/9f/04/b09f04ffe682b8d344e140d71a263dcf.jpg",
			head: "Lorem ipsum dolor sit amet ?",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate delectus unde magni culpa itaque quod doloribus cum non eum rem alias odio praesentium voluptatum sequi natus, magnam quasi necessitatibus labore quisquam. Excepturi aliquam distinctio, fuga odio odit soluta temporibus.",
			bg: "#fff",
			color: "#000",
			headColor: "#0e244e",
		},

		{
			img: "https://i.pinimg.com/originals/05/42/f0/0542f0471cb0a63ec3902c220db00db1.jpg",
			head: "Lorem ipsum dolor sit amet ?",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate delectus unde magni culpa itaque quod doloribus cum non eum rem alias odio praesentium voluptatum sequi natus, magnam quasi necessitatibus labore quisquam. Excepturi aliquam distinctio, fuga odio odit soluta temporibus.",
			bg: "#08121e",
			color: "#fff",
			headColor: "#6e4106",
		},
	];

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const setWindowDimensions = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", setWindowDimensions);
		return () => window.removeEventListener("resize", setWindowDimensions);
	}, []);

	return (
		<div className="header_questions" id="hq">
			{elements.map((element, i) => {
				return (
					<div
						className="Qelements"
						style={{
							background: element.bg,
							color: element.color,
						}}
					>
						{windowWidth > 1120 && i % 2 === 0 && (
							<div
								className="Qimage"
								id="img "
								style={{
									background: `url(${element.img})`,
								}}
							>
								<div className="Qimg"></div>
							</div>
						)}

						{((windowWidth <= 1120 && i % 2 === 0) ||
							(window.innerWidth <= 1120 && i % 2 !== 0)) && (
							<div
								className="Qimage"
								id="img "
								style={{
									background: `url(${element.img})`,
								}}
							>
								<div className="Qimg"></div>
							</div>
						)}

						<div className="content">
							<h1
								style={{
									color: element.headColor,
								}}
							>
								{element.head}
							</h1>
							<p>{element.paragraph}</p>
						</div>

						{windowWidth > 1120 && i % 2 !== 0 && (
							<div
								className="Qimage"
								id="img"
								style={{
									background: `url(${element.img})`,
								}}
							>
								<div className="Qimg"></div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default HeaderQuestions;
