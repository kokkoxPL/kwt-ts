interface Gall {
	images: Img[];
}

interface Img {
	img: Object;
}

const Images = ({ images }: Gall) => {
	return (
		<div className="images">
			{images.map((image: Img) => {
				return (
					<div
						className="image"
						style={{
							backgroundImage: `url(${image.img})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<div className="czorny"></div>
					</div>
				);
			})}
		</div>
	);
};

export default Images;
