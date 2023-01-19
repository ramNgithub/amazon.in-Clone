import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MobilePage from "../../MobilePage/Components/MobilePage";
import Bestseller from '../../BestSeller/Bestseller';
import { auth } from "../firebase";
import Homepage from "../Home/Homepage";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const MainRoutes = () => {
	const [userName, setuserName] = useState("");
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setuserName(user.displayName);
			} else {
				setuserName("");
			}
		});
	}, []);


	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage name={userName} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/mobile" element={<MobilePage />} />
        <Route path='/bestseller' element={<Bestseller/>}/>
			</Routes>
		</div>
	);
};

export default MainRoutes;
