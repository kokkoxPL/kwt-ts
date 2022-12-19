const Footer = () => {
	return (
		<div className="footer">
			<div className="tags">
				<p>Zespół Szkół Technicznych i Ogólnokształcących</p>
				<p>ul. Św. Ducha 1A, 37-500 Jarosław</p>
				<h2>AUTORZY</h2>
				<p>Jakub Kontek</p>
				<p>Adrian Gamracy</p>
			</div>
			<div className="border"></div>
			<iframe
				title="mapa"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.6776108412885!2d22.678653387022138!3d50.01709389844757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c9bda79d56527%3A0x5eaeb3e6060f7c83!2zWmVzcMOzxYIgU3prw7PFgiBUZWNobmljem55Y2ggaSBPZ8OzbG5va3N6dGHFgmPEhWN5Y2ggaW0uIFN0ZWZhbmEgQmFuYWNoYQ!5e0!3m2!1spl!2spl!4v1670121725943!5m2!1spl!2spl"
				width="500"
				height="300"
				style={{ marginLeft: "50px", border: "0" }}
				loading="lazy"
			/>
		</div>
	);
};

export default Footer;
