import React from "react";
import styled from "./WithDrawn.module.css";

const WithDrawn = () => {
	return (
		<div className={styled.container}>
			<div>
				<div>
					<div>
						<div>Referral Earning</div>
						<div>₹ 2,500</div>
					</div>
					<div>
						<div>Total Referrals</div>
						<div>7</div>
					</div>
					<div>
						<div>Wallet Balance</div>
						<div>₹ 500</div>
					</div>
				</div>
				<div>
					<button>Withdraw Balance</button>
				</div>
			</div>
			<div>
				<div>
					<div>Your Referral Code</div>
					<div>E D C H 5 4</div>
				</div>
			</div>
		</div>
	);
};

export default WithDrawn;
