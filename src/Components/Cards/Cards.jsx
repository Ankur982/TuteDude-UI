import React from "react";
import styled from "./Cards.module.css";

const cards = [
	{
		name: "Dhiraj Saxsena",
		date: "14 Sep, 2022",
		count: 6,
		courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
		amount: 185,
	},

	{
		name: "Subhash Mishra",
		date: "15 Sep, 2022",
		count: 23,
		courses: [
			"UI/UX",
			"Photoshop",
			"Illustrator",
			"Python",
			"MERN",
			"Java",
			"C++",
		],
		amount: 485,
	},

	{
		name: "Prafull Kumar",
		date: "15 Sep, 2022",
		count: 23,
		courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
		amount: 485,
	},
];

const Cards = () => {
	return (
		<div className={styled.container}>
			<div>
				Friends who enrolled<span>(3)</span>
			</div>

			<div className={styled.cardBox}>
				{cards.map((ele) => (
					<div className={styled.cards}>
						{/* name and date */}
						<div>
							<div>{ele.name}</div>
							<div>{ele.date}</div>
						</div>

						{/* course enrolled */}
						<div>{`Courses Enrolled(${ele.count})`}</div>

						<div className={styled.courses}>
							{/* All courses */}
							{ele.courses.map((item) => (
								<div>{item}</div>
							))}
						</div>

						{/* Referal Amount */}
						<div>
							<div>Referral Amount </div>
							<div>{`₹${ele.amount}`}</div>
						</div>
					</div>
				))}
			</div>
			{/* Terms and Conditons */}
			<div>Terms & Conditions</div>
		</div>
	);
};

export default Cards;
