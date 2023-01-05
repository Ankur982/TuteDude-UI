import React from "react";
import styled from "./Navbar.module.css";
import logo from "../../Images/Tutedude.png";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const links = [
	{
		name: "My Assignment",
	},
	{
		name: "Chat with Mentor",
	},
	{
		name: "ProfileName",
		icon: FaUserCircle,
		arrow: IoIosArrowDown,
	},
];

const Navbar = () => {
	return (
		<div className={styled.navbar}>
			<div>
				<img className={styled.logo} src={logo} alt="logo" />
			</div>
			<div className={styled.navbardiv}>
				{links.map((ele) => (
					<div className={styled.icon}>
						{ele.icon ? <FaUserCircle className={styled.user} /> : <></>}
						<div>{ele.name}</div>
						{ele.arrow ? <IoIosArrowDown className={styled.user} /> : <></>}
					</div>
				))}
			</div>
		</div>
	);
};

export default Navbar;
