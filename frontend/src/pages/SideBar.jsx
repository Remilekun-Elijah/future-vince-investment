/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styled from "styled-components";
// import { IMainLogo } from "../../utils/icons";
import Storage from "../utils/storage";


import { Link, useLocation } from "react-router-dom";
import links from "../utils/linkTree";
import config from "../utils/config";

const SidebarSection = styled.div`
		background-color: var(--c_gray);
		/* color: var(--C_secondary); */
		width: 21%;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-left: 10px;
		padding-right: 10px; 
	`,
	Logo = styled.img`
		width: 45px;
		height: 45px;
	`,
	LogoWrapper = styled.div`
		display: flex;
		align-items: center;
	`,
	TitleContainer = styled.div``,
	Title = styled.h1`
	`,
	SubTitle = styled.h2`
		font-size: 10px;
	`,
	SidebarLinksWrapper = styled.div`
		.active {
			color: var(--C_secondary);
			background-color: var(--C_success);
			/* padding-left: 15px; */
      text-decoration: none;
      text-align: left;
			margin-left: 5px;
			margin-right: 5px;
			border-radius: 8px;
		}
	`,
	SidebarLinks = styled.div`
	    /* {
			color: var(--c_success_disabled);
			background-color: #fff;
			padding-left: 15px;
		} */
      color: var(--C_secondary);
			background-color: var(--C_gray_lite);
      text-align: left;
      margin-top: 5px;
			margin-left: 5px;
			margin-right: 5px;
			border-radius: 8px;
      Link {
        text-decoration: none;
      }
		&:hover {
			color: var(--C_secondary);
			background-color: var(--C_success);
			margin-left: 5px;
			margin-right: 5px;
			border-radius: 8px;
		}
    Link {
        text-decoration: none;
      }
		span {
			font-weight: 400;
			line-height: 19px;
			font-size: 15px;
		}
		.accordion-active {
			display: block !important;
    }
	`,
	Accordion = styled.div`
		display: none;
		
	`,
	Sublink = styled.div`
		position: relative;
		z-index: 1;
	`;

const Sidebar = () => {
	const user = Storage.get('user'),
	admin = Storage.get('token'),
	adminString = JSON.stringify(admin),
	userString = JSON.stringify(user), 
	userRole = ((userString && JSON.parse(userString)?.user?.role) || (adminString && JSON.parse(adminString)?.type)),
		location = useLocation(),
		[activeLink, setActiveLink] = React.useState(location.pathname);
		

	useEffect(() => {
		setActiveLink(location.pathname);
	}, []);
	

	return (
		<SidebarSection className="pt-14  fixed h-screen  top-0 sidebar scroll">
			<LogoWrapper className="flex items-center gap-2 ml-3">
				{/* <Logo src={IMainLogo} alt="logo" /> */}
				<TitleContainer className="flex flex-col justify-start">
					<Title className="leading-4 text-sm font-medium">
						{config.appName}
					</Title>
					<SubTitle className="leading-4 text-left font-normal">
						{config.appMotto}
					</SubTitle>
				</TitleContainer>
			</LogoWrapper>

			<SidebarLinksWrapper className=" flex flex-col gap-6 mt-14 justify-between linkWrapper">
				{links.map((link, index) => {
					const currentUrl =
					activeLink.indexOf(link.url) > -1
					? true
					: false
					return (
						(link.authorizedUsers.includes(userRole) ||
							link.authorizedUsers.includes("all")) && (
							<SidebarLinks
								key={index}
								className={`${currentUrl ? "active" : ""} py-2`}>
								{!link.xtra?.icon ? (
									<Link className="text-decoration-none" to={link.url || ""}>
										<div className="flex items-center cursor-pointer">
											{link.icon}
											<span className="text-lg">{link.name}</span>
										</div>
									</Link>
								) : (
									<>
										<Sublink
											className={`flex items-center cursor-pointer`}
											onClick={(e) => {
												e.stopPropagation();
												if (e.target.tagName.toLowerCase() !== "div") {
													e.target.parentElement.nextElementSibling.classList.toggle("accordion-active");
													if (!currentUrl) {
														e.target.parentElement.parentElement.classList.toggle("active");
													}
												} else {
													e.target.nextElementSibling.classList.toggle("accordion-active");
													if (!currentUrl) {
														e.target.parentElement.classList.toggle("active");
													}
												}
											}}>
											{link.icon}
											<span>{link.name}</span>
											{link.xtra.icon}
										</Sublink>

										<Accordion
											className={`flex ml-12 accordion ${
												link.xtra.data.find(({ url }) =>
													url === activeLink
														? true
														: activeLink.indexOf(url) > -1
														? true
														: false,
												)
													? "accordion-active"
													: ""
											}`}>
											<ul>
												{link.xtra.data.map(({ name, url }, index) => {
													return (
														<Link
															style={{ color: "#556777" }}
															key={index}
															to={url || ""}>
															<li
																className={`mt-3 text-base ${
																	activeLink === url
																		? "text-active"
																		: activeLink.indexOf(url) > -1
																		? "text-active"
																		: ""
																}`}>
																{name}
															</li>
														</Link>
													);
												})}
											</ul>
										</Accordion>
									</>
								)}
							</SidebarLinks>
						)
					);
				})}
			</SidebarLinksWrapper>
		</SidebarSection>
	);
};

export default Sidebar;

