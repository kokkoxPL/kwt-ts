import { Gallery, Img } from "../interfaces";

const Images = ({ images }: Gallery) => {
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
