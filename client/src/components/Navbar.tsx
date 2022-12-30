import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	let location = useLocation();

	const change = () => setIsActive(!isActive);

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1)) as HTMLElement;
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

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
					<li onClick={change}>
						<Link to={"/#header"}>STRONA GŁÓWNA</Link>
					</li>
					<li onClick={change}>
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
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
