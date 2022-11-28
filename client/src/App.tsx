import "./index.css";
import "./form.css";
import "./gallery.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fontello/css/fontello.css";
// import anime from "animejs/lib/anime.es.js"

// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(TextPlugin);

//Pages

import Home from "./pages/Home";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import FormSubmitted from "./pages/FormSubmitted";
import Admin from "./pages/Admin";
import Teapot from "./pages/Teapot";

//COMPONENTS

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

document.title = "Konkurs Wiedzy Technicznej";

function App() {
	const script = document.createElement("script");

	script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js";

	document.body.appendChild(script);
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/join" element={<Join />} />
						<Route path="/submitted" element={<FormSubmitted />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/*" element={<Teapot />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
