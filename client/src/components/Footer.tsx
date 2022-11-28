import React from "react";

const Footer = () => {
	return (
		<div className="footer">
			<div className="tags">
				<p>Zespół Szkół Technicznych i Ogólnokształcących</p>
				<p>
					ul. Św. Ducha 1A <br />
					37-500 Jarosław
				</p>
				{/* <img src="" /> */}
			</div>
			<div className="border"></div>
			<div className="socials">
				<a href="https://www.facebook.com/ZSTiOBANACH">
					<i className="icon-facebook" />
				</a>
				<a href="https://www.instagram.com/zstio.fm/">
					<i className="icon-instagram icon" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
