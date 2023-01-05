import React from "react";
import { Route, Routes } from "react-router-dom";
import ReferAndEarn from "./ReferAndEarn";
import FriendReferral from "./FriendReferral";

const MainRoute = () => {
	return (
		<div>
			<Routes>
				<Route path={"/"} element={<FriendReferral />} />
				<Route path={"/referandearn"} element={<ReferAndEarn />} />
			</Routes>
		</div>
	);
};

export default MainRoute;
