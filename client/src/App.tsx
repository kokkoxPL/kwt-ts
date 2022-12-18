import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Styles
import "./styles/index.css";
import "./styles/form.css";
import "./styles/gallery.css";
import "./fontello/css/fontello.css";

document.title = "Konkurs Wiedzy Technicznej";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/join" element={<Join />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/*" element={<Home />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
