import About from "../components/About";
import HeaderQuestions from "../components/HeaderQuestions";
import { Link } from "react-router-dom";
// import anime from "animejs/lib/anime.es.js"
// import { gsap } from "gsap";

const Home = () => {
	// const toggle =()=>{
	//   anime({

	//           targets: '.kwtI',
	//           translateX: -250,
	//           delay:0.5
	//   })
	// }

	// document.querySelector('.kwtI')

	return (
		<>
			<div className="header" id="header">
				<div className="header_elements">
					<div className="kwt">
						<div className="kwtI">
							<h1>K</h1>
						</div>
						<div className="kwtII">
							<h1>W</h1>
						</div>
						<div className="kwtIII">
							<h1>T</h1>
						</div>
					</div>
					<div className="desc">
						<p>DOŁĄCZ DO KONKURSU I SPRAWDŹ SWOJĄ WIEDZĘ Z WYBRANEJ PRZEZ CIEBIE DZIEDZINY!</p>
					</div>
					<div className="header_button">
						<div className="sign">
							<Link to={"/join"}>
								<div className="button">
									<p>Dołącz</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<About />
			<HeaderQuestions />
		</>
	);
};

export default Home;
