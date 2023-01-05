import React from "react";
import styled from "./Referral.module.css";

const Referral = () => {
  return (
    <div className={styled.container}>
      <div>
        <div>Your Referral Code</div>
        <div>E D C H 5 4</div>
      </div>

      <div>
        <div>Wallet Balance</div>
        <div>₹ 500</div>
      </div>
    </div>
  );
};

export default Referral;
