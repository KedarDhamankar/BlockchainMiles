import { useEffect, useState } from "react";
import { ethers } from "ethers";


// ABIs
import TokenName from "./abis/TokenName.json";

// Config
import config from "./config.json";

//SID FTW
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
