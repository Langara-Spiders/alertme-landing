import React, { Fragment, useEffect, useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import devices from "./devices";
import palette from "../theme";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Nav = styled.nav`
	background-color: ${palette.navbarBg};
	border-radius: 100px;
	height: 54px;
	left: 50%;
	position: fixed;
  z-index: 999;
	top: ${({showNavbar}) => showNavbar ?  "16px" : "-100px"};
	transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: ${({showNavbar}) => (showNavbar ? 1 : 0)};
	transform: translateX(-50%);
	width: calc(100% - 32px);
  padding: 10px 16px;
	display: flex;
	justify-content: space-between;
  align-items: center;
	box-shadow: 0 4px 40px 0 rgba( 0, 0, 0, 0.1 );

	@media only screen and (${devices.lg}) {
    width: calc(100% - 320px);
		height: 70px;
  }
`;

const NavList = styled.ul`
`;

const NavListItem = styled.li`
`;

const NavListItemLink = styled.a`
	color: ${palette.navbarTxt} !important;
`;

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

	const isLargeDevice = useMediaQuery({
    query: `(${devices.md})`
  })

	const handleClick = () => {
		if (!isLargeDevice) {
			const navLinks = document.getElementById('navLinks');
			const navToggle = document.getElementById('navToggle');
			const overlay = document.getElementById('overlay');
			navLinks.classList.toggle('show');
			overlay.classList.toggle('show');
			navToggle.classList.toggle('open');
		}
	}

  return (
		<Fragment>
			<div
				id="overlay"
				className="menu-overlay"
				onClick={handleClick}></div>
			<Nav
				className="navbar"
				showNavbar={showNavbar}>
				<div className="nav-brand">
					<a href="#">
						<StaticImage
							src="../assets/images/logo.png"
							alt="AlertMe Logo"
							style={{
								width: "34px"
							}}
							placeholder="none"
							objectFit="contain" />
					</a>
				</div>
				<div
					onClick={handleClick}
					className="nav-toggle"
					id="navToggle">
					<div className="nav-toggle-wrap">
						<div className="bar1"></div>
						<div className="bar2"></div>
					</div>
				</div>
				<NavList className="nav-links" id="navLinks">
					<NavListItem>
						<NavListItemLink
							onClick={handleClick}
							href="#getStarted">Get Started</NavListItemLink>
					</NavListItem>
					<NavListItem>
						<NavListItemLink
							onClick={handleClick}
							href="#features">Features</NavListItemLink>
					</NavListItem>
					<NavListItem>
						<NavListItemLink
							onClick={handleClick}
							href="#team">Team</NavListItemLink>
					</NavListItem>
					<NavListItem>
						<NavListItemLink
							onClick={handleClick}
							href="#contact">Contact</NavListItemLink>
					</NavListItem>
				</NavList>
			</Nav>
		</Fragment>
  );
};

export  default Navbar
