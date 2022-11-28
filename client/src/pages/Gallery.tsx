import Images from "../components/Images";

const Gallery = () => {
	const img = [
		{
			img: "https://wallpaperset.com/w/full/7/3/4/101918.jpg",
		},

		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kt04W_4E8mFHIPicA_wNGFtG-3gLsZFsTA&usqp=CAU",
		},

		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i511wdJmgPR_54w24CfeRs-pI1H09502cg&usqp=CAU",
		},

		{
			img: "https://wallpaperset.com/w/full/7/3/4/101918.jpg",
		},

		{
			img: "https://wallpaperset.com/w/full/7/3/4/101918.jpg",
		},

		{
			img: "https://wallpaperset.com/w/full/7/3/4/101918.jpg",
		},
	];
	return <Images images={img} />;
};

export default Gallery;
