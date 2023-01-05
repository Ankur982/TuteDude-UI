import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "./ReferAndEarn.module.css";
import WithDrawn from "../Components/WithDrawn/WithDrawn";
import Work from "../Components/Work/Work";
import { NavLink } from "react-router-dom";

const ReferAndEarn = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "black",
  };

  let deactiveStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className={styled.container}>
      {/* Refer And Earn*/}
      <div className={styled.uiux}>
        <div>UI/UX</div>
        <div className={styled.icons}>
          <IoIosArrowForward />
        </div>
        <NavLink
          to="/referandearn"
          style={({ isActive }) => (isActive ? activeStyle : deactiveStyle)}
        >
          <div>Refer & Earn</div>
        </NavLink>
      </div>

      {/* withdraw balance */}
      <WithDrawn />

      {/* How does it work?? */}

      <Work />
    </div>
  );
};

export default ReferAndEarn;
