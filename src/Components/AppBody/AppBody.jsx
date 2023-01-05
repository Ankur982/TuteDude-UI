import React from "react";
import styled from "./AppBody.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Referral from "../Referral/Referral";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const AppBody = () => {
	return (
		<div className={styled.container}>
			{/* Refer And Earn starts*/}
			<div className={styled.uiux}>
				<div>UI/UX</div>
				<div className={styled.icons}>
					<IoIosArrowForward />
				</div>
				<Link to={"/referandearn"}>
					<div>Refer & Earn</div>
				</Link>
				<div className={styled.icons}>
					<IoIosArrowForward />
				</div>
				<Link to={"/"}>
					<div>Friends Referred</div>
				</Link>
			</div>

			{/* Refer And Earn ends*/}

			{/* Your Referal Code div*/}
			<Referral />

			{/* friends who enrolled cards */}
			<Cards />
		</div>
	);
};

export default AppBody;
