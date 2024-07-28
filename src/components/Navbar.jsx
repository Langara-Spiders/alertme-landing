import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import palette from "../theme";
import styled from "styled-components";

const Nav = styled.nav`
	background-color: ${palette.navbarBg};
	border-radius: 100px;
	height: 54px;
	left: 50%;
	position: fixed;
  z-index: 999;
	top: 16px;
	transform: translateX(-50%);
	width: calc(100% - 32px);
  padding: 10px 16px;
`;

const Navbar = () => {
  return (
    <Nav>
			<StaticImage
				src="../assets/images/logo.png"
				alt="AlertMe Logo"
				style={{
					width: "34px"
				}}
				objectFit="contain" />
    </Nav>
  );
};

export  default Navbar
