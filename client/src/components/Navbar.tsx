import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const change = () => setIsActive(!isActive);

	const scroll = (position: string) => {
		const element = document.getElementById(position) as HTMLElement;
		element.scrollIntoView({ behavior: "smooth" });
		change();
	};

	return (
		<div className="menu">
			<div onClick={change} className="navButton">
				<div className={`lines ${isActive ? "xButton" : ""}`}>
					<div className="line item1" id="line"></div>
					<div className="line item2" id="line"></div>
					<div className="line item3" id="line"></div>
				</div>
			</div>

			<div className={`nav_menu ${isActive ? "nav_active" : ""}`}>
				<div className="kwt2">
					<h1>KWT</h1>
				</div>
				<ul>
					<li onClick={() => scroll("header")}>
						<Link to={"/#header"}>STRONA GŁÓWNA</Link>
					</li>
					<li onClick={() => scroll("about")}>
						<Link to={"/#about"}>INFORMACJE</Link>
					</li>
					<li onClick={change}>
						<Link to={"/gallery"}>GALERIA ZDJĘĆ</Link>
					</li>
					<li onClick={change}>
						<Link to={"/join"}>
							<span style={{ color: "red" }}>DOŁĄCZ</span>
						</Link>
					</li>

					<li onClick={change}>
						<Link to={"/"}>
							<span
								style={{
									color: "red",
									fontWeight: "800",
									letterSpacing: "8px",
								}}
							>
								AUTORZY
							</span>
						</Link>
					</li>

					{/* <li onClick={change}>
						<Link to={"/"}>PYTANIA Z POPRZEDNICH LAT</Link>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
