import "./styles/index.css";
import "./styles/form.css";
import "./styles/gallery.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./fontello/css/fontello.css";

//Pages

import Home from "./pages/Home";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import Teapot from "./pages/Teapot";

//COMPONENTS

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

document.title = "Konkurs Wiedzy Technicznej";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/join" element={<Join />} />
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
