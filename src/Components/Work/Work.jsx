import React from "react";
import styled from "./Work.module.css";

const cards = [
	{
		name: "Dhiraj Saxsena",
		svg: (
			<svg
				width="32"
				height="16"
				viewBox="0 0 32 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16 9C18.1733 9 20.0933 9.52 21.6533 10.2C23.0933 10.84 24 12.28 24 13.84V16H8V13.8533C8 12.28 8.90667 10.84 10.3467 10.2133C11.9067 9.52 13.8267 9 16 9ZM5.33333 9.33333C6.8 9.33333 8 8.13333 8 6.66667C8 5.2 6.8 4 5.33333 4C3.86667 4 2.66667 5.2 2.66667 6.66667C2.66667 8.13333 3.86667 9.33333 5.33333 9.33333ZM6.84 10.8C6.34667 10.72 5.85333 10.6667 5.33333 10.6667C4.01333 10.6667 2.76 10.9467 1.62667 11.44C0.64 11.8667 0 12.8267 0 13.9067V16H6V13.8533C6 12.7467 6.30667 11.7067 6.84 10.8ZM26.6667 9.33333C28.1333 9.33333 29.3333 8.13333 29.3333 6.66667C29.3333 5.2 28.1333 4 26.6667 4C25.2 4 24 5.2 24 6.66667C24 8.13333 25.2 9.33333 26.6667 9.33333ZM32 13.9067C32 12.8267 31.36 11.8667 30.3733 11.44C29.24 10.9467 27.9867 10.6667 26.6667 10.6667C26.1467 10.6667 25.6533 10.72 25.16 10.8C25.6933 11.7067 26 12.7467 26 13.8533V16H32V13.9067ZM16 0C18.2133 0 20 1.78667 20 4C20 6.21333 18.2133 8 16 8C13.7867 8 12 6.21333 12 4C12 1.78667 13.7867 0 16 0Z"
					fill="url(#paint0_linear_3821_13650)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3821_13650"
						x1="32"
						y1="7.99999"
						x2="1.70723e-07"
						y2="7.99999"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#800080" />
						<stop offset="1" stop-color="#FF864C" />
					</linearGradient>
				</defs>
			</svg>
		),
		head: "Invite your Friends",
		sub: "Share the link tutedude.com with your friends",
	},

	{
		name: "Dhiraj Saxsena",
		svg: (
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M26.547 13.4403L14.547 1.44033C14.067 0.960325 13.4003 0.666992 12.667 0.666992H3.33366C1.86699 0.666992 0.666992 1.86699 0.666992 3.33366V12.667C0.666992 13.4003 0.960325 14.067 1.45366 14.5603L13.4537 26.5603C13.9337 27.0403 14.6003 27.3337 15.3337 27.3337C16.067 27.3337 16.7337 27.0403 17.2137 26.547L26.547 17.2137C27.0403 16.7337 27.3337 16.067 27.3337 15.3337C27.3337 14.6003 27.027 13.9203 26.547 13.4403ZM5.33366 7.33366C4.22699 7.33366 3.33366 6.44033 3.33366 5.33366C3.33366 4.22699 4.22699 3.33366 5.33366 3.33366C6.44033 3.33366 7.33366 4.22699 7.33366 5.33366C7.33366 6.44033 6.44033 7.33366 5.33366 7.33366Z"
					fill="url(#paint0_linear_3821_13656)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3821_13656"
						x1="27.3337"
						y1="14.0003"
						x2="0.666992"
						y2="14.0003"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#800080" />
						<stop offset="1" stop-color="#FF864C" />
					</linearGradient>
				</defs>
			</svg>
		),
		head: "Friend purchases any course",
		sub: "Using your REFERRAL CODE in the payments page",
	},

	{
		name: "Dhiraj Saxsena",
		svg: (
			<svg
				width="19"
				height="24"
				viewBox="0 0 19 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.78125 9.85938L2.03125 6.45312H8.76562C8.46354 5.75521 7.98958 5.19792 7.34375 4.78125C6.70833 4.35417 5.94271 4.14062 5.04688 4.14062H0.78125L2.03125 0.734375H18.6406L17.3906 4.14062H13.3906C13.5469 4.24479 13.6979 4.39062 13.8438 4.57812C13.9896 4.76562 14.1198 4.96875 14.2344 5.1875C14.349 5.40625 14.4427 5.63021 14.5156 5.85938C14.5885 6.08854 14.6354 6.28646 14.6562 6.45312H18.6406L17.3906 9.85938H14.375C14.1771 10.5052 13.875 11.1094 13.4688 11.6719C13.0729 12.224 12.5833 12.724 12 13.1719C11.4271 13.6094 10.776 13.9896 10.0469 14.3125C9.31771 14.625 8.53125 14.8646 7.6875 15.0312L17.4219 24H10.5625L1.45312 15.4688V12.1562H4.54688C5.05729 12.1562 5.52604 12.0938 5.95312 11.9688C6.39062 11.8333 6.77604 11.6615 7.10938 11.4531C7.45312 11.2344 7.74479 10.9896 7.98438 10.7188C8.23438 10.4375 8.42708 10.151 8.5625 9.85938H0.78125Z"
					fill="url(#paint0_linear_3821_13657)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3821_13657"
						x1="21"
						y1="11.5"
						x2="-2"
						y2="11.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#800080" />
						<stop offset="1" stop-color="#FF864C" />
					</linearGradient>
				</defs>
			</svg>
		),
		head: "You get ₹ 200 as referral money",
		sub: "On total purchase the friend makes, into your wallet",
	},

	{
		name: "Dhiraj Saxsena",
		svg: (
			<svg
				width="27"
				height="27"
				viewBox="0 0 27 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24.9845 13.3173L26.4565 10.7733C26.6334 10.4672 26.6816 10.1034 26.5903 9.76187C26.499 9.42032 26.2759 9.129 25.9699 8.95196L23.4232 7.47996V4.54663C23.4232 4.19301 23.2827 3.85387 23.0327 3.60382C22.7826 3.35377 22.4435 3.2133 22.0899 3.2133H19.1579L17.6872 0.667963C17.5096 0.362519 17.2188 0.139304 16.8779 0.04663C16.7087 0.000784521 16.5322 -0.0110369 16.3585 0.0118508C16.1848 0.0347385 16.0173 0.0918803 15.8659 0.179964L13.3192 1.65196L10.7725 0.17863C10.4663 0.0018269 10.1024 -0.0460859 9.76079 0.0454312C9.41923 0.136948 9.128 0.360399 8.95119 0.66663L7.47919 3.2133H4.54719C4.19357 3.2133 3.85443 3.35377 3.60438 3.60382C3.35433 3.85387 3.21385 4.19301 3.21385 4.54663V7.47863L0.667187 8.95063C0.51523 9.03804 0.382042 9.15461 0.275274 9.29364C0.168505 9.43268 0.0902623 9.59145 0.0450394 9.76082C-0.000183453 9.93019 -0.0114947 10.1068 0.0117555 10.2806C0.0350058 10.4543 0.0923591 10.6218 0.180521 10.7733L1.65252 13.3173L0.180521 15.8613C0.00450567 16.1677 -0.04325 16.5312 0.0476652 16.8726C0.13858 17.2141 0.360793 17.5057 0.665854 17.684L3.21252 19.156V22.088C3.21252 22.4416 3.353 22.7807 3.60304 23.0308C3.85309 23.2808 4.19223 23.4213 4.54585 23.4213H7.47919L8.95119 25.968C9.06923 26.1698 9.23777 26.3373 9.44023 26.4542C9.64268 26.5711 9.87208 26.6333 10.1059 26.6346C10.3379 26.6346 10.5685 26.5733 10.7739 26.4546L13.3179 24.9826L15.8645 26.4546C16.1707 26.6312 16.5344 26.6791 16.8758 26.5879C17.2172 26.4966 17.5086 26.2737 17.6859 25.968L19.1565 23.4213H22.0885C22.4421 23.4213 22.7813 23.2808 23.0313 23.0308C23.2814 22.7807 23.4219 22.4416 23.4219 22.088V19.156L25.9685 17.684C26.1202 17.5963 26.2531 17.4796 26.3597 17.3405C26.4663 17.2015 26.5444 17.0428 26.5896 16.8735C26.6348 16.7042 26.6462 16.5277 26.6231 16.354C26.6001 16.1803 26.543 16.0129 26.4552 15.8613L24.9845 13.3173ZM9.98452 6.6373C10.5151 6.63747 11.0239 6.84843 11.399 7.22375C11.7741 7.59907 11.9847 8.10802 11.9845 8.63863C11.9843 9.16924 11.7734 9.67805 11.3981 10.0531C11.0227 10.4282 10.5138 10.6388 9.98319 10.6386C9.45258 10.6385 8.94377 10.4275 8.5687 10.0522C8.19363 9.67685 7.98301 9.16791 7.98319 8.6373C7.98336 8.10669 8.19432 7.59788 8.56964 7.22281C8.94496 6.84773 9.45391 6.63712 9.98452 6.6373ZM10.3845 19.4373L8.25119 17.8386L16.2512 7.17196L18.3845 8.77063L10.3845 19.4373ZM16.6512 19.9706C16.3885 19.9705 16.1283 19.9187 15.8856 19.8181C15.6429 19.7175 15.4224 19.57 15.2367 19.3842C15.051 19.1983 14.9037 18.9777 14.8032 18.735C14.7028 18.4922 14.6511 18.232 14.6512 17.9693C14.6513 17.7066 14.7031 17.4464 14.8037 17.2037C14.9044 16.961 15.0518 16.7405 15.2376 16.5548C15.4235 16.3691 15.6441 16.2218 15.8868 16.1213C16.1296 16.0209 16.3898 15.9692 16.6525 15.9693C17.1831 15.9695 17.6919 16.1804 18.067 16.5557C18.4421 16.9311 18.6527 17.44 18.6525 17.9706C18.6523 18.5012 18.4414 19.01 18.0661 19.3851C17.6907 19.7602 17.1818 19.9708 16.6512 19.9706Z"
					fill="url(#paint0_linear_3821_13646)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3821_13646"
						x1="26.6355"
						y1="13.3173"
						x2="1.42103e-07"
						y2="13.3173"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#800080" />
						<stop offset="1" stop-color="#FF864C" />
					</linearGradient>
				</defs>
			</svg>
		),
		head: "Your Friend gets ₹ 200 Off ",
		sub: "On his overall fee on successful purchase using your referral code ",
	},

	{
		name: "Dhiraj Saxsena",
		svg: (
			<svg
				width="26"
				height="24"
				viewBox="0 0 26 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24 20V21.3333C24 22.8 22.8 24 21.3333 24H2.66667C1.18667 24 0 22.8 0 21.3333V2.66667C0 1.2 1.18667 0 2.66667 0H21.3333C22.8 0 24 1.2 24 2.66667V4H12C10.52 4 9.33333 5.2 9.33333 6.66667V17.3333C9.33333 18.8 10.52 20 12 20H24ZM12 17.3333H25.3333V6.66667H12V17.3333ZM17.3333 14C16.2267 14 15.3333 13.1067 15.3333 12C15.3333 10.8933 16.2267 10 17.3333 10C18.44 10 19.3333 10.8933 19.3333 12C19.3333 13.1067 18.44 14 17.3333 14Z"
					fill="url(#paint0_linear_3821_13653)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3821_13653"
						x1="25.3333"
						y1="12"
						x2="1.35156e-07"
						y2="12"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#800080" />
						<stop offset="1" stop-color="#FF864C" />
					</linearGradient>
				</defs>
			</svg>
		),
		head: "Transfer money from wallet",
		sub: "When the wallet balance reaches ₹200 or more, you can withdraw it",
	},
];

const Work = () => {
	return (
		<div className={styled.container}>
			<div>How does it work ?</div>

			<div className={styled.view}>
				{cards.map((ele) => (
					<div>
						<div>{ele.svg}</div>
						<div>
							<div>{ele.head}</div>
							<div>{ele.sub}</div>
						</div>
					</div>
				))}
			</div>
			{/* Terms and Conditons */}
			<div>Friends Who Enrolled</div>
			<div>Terms & Conditions</div>
		</div>
	);
};

export default Work;
