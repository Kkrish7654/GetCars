import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cars from "./components/Cars";

const App = () => {
	return (
		<BrowserRouter>
		<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/cars" element={<Cars/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
