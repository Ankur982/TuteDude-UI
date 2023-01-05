import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "./ReferAndEarn.module.css";
import WithDrawn from "../Components/WithDrawn/WithDrawn";
import Work from "../Components/Work/Work";
import { Link } from "react-router-dom";

const ReferAndEarn = () => {
  return (
    <div className={styled.container}>
      {/* Refer And Earn*/}
      <div className={styled.uiux}>
        <div>UI/UX</div>
        <div className={styled.icons}>
          <IoIosArrowForward />
        </div>
        <Link to={"/referAndEarn"}>
          <div>Refer & Earn</div>
        </Link>
      </div>

      {/* withdraw balance */}
      <WithDrawn />
      {/* How does it work?? */}

      <Work />
    </div>
  );
};

export default ReferAndEarn;
