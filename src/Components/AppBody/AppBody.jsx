import React from "react";
import styled from "./AppBody.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import Referral from "../Referral/Referral";
import Cards from "../Cards/Cards";
import { NavLink } from "react-router-dom";

const AppBody = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "black",
  };

  let deactiveStyle = {
    textDecoration: "none",
    color: "black",
  };

  let activeStyleMobile = {
    textDecoration: "none",
    color: "black",
  };

  let deactiveStyleMobile = {
    textDecoration: "none",
    color: "black",
  };
  
  return (
    <div className={styled.container}>
      {/* Refer And Earn starts*/}
      <div className={styled.uiux}>
        <div>UI/UX</div>
        <div className={styled.icons}>
          <IoIosArrowForward />
        </div>
        <NavLink
          to="/referAndEarn"
          style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          <div>Refer & Earn</div>
        </NavLink>
        <div className={styled.icons}>
          <IoIosArrowForward />
        </div>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? activeStyleMobile : deactiveStyleMobile
          }
        >
          <div>Friends Referred</div>
        </NavLink>
      </div>

      <NavLink
        to="/referAndEarn"
        style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
      >
        <div className={styled.goback}>
          <IoArrowBack />
          <div>go back</div>
        </div>
      </NavLink>

      {/* Refer And Earn ends*/}

      {/* Your Referal Code div*/}
      <Referral />

      {/* friends who enrolled cards */}
      <Cards />
    </div>
  );
};

export default AppBody;
