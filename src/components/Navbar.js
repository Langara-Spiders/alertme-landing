import React, { useState } from "react";

import {BrownButton} from "../components/StyledComponent"
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import menuIcon from '../images/Hero-section/menuIcon.png';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 10px auto;
  border-radius: 100px;
  background-color: white;
  padding: 10px 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding:0;
    margin: 10px 15px 0 15px;
    // margin-top: 10px;
  }
`;

const NavList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    transition: transform 0.3s ease-in-out;
    transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-110%)')};
    z-index: 1000;
  }
`;

const NavItem = styled.li`
  list-style-type: none;
  margin: 0 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;


const NavItemLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-family: 'Public Sans', sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;  

const Hamburger = styled.img`
  display: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  object-fit: contain;

  @media (max-width: 768px) {
    display: block;
  }
`;


const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <div>
        <StaticImage
          src="../images/Hero-section/LogoAlertmeBird.png"
          alt="logo"
          width={45}
          height={45}
        />
      </div>
      <Hamburger src={menuIcon} onClick={toggleMenu} alt="menu icon" />
      <NavList isOpen={isOpen}>
        <CloseButton onClick={closeMenu}>&times;</CloseButton>
        <NavItem><NavItemLink to="/gettingStarted" onClick={closeMenu}>Getting Started</NavItemLink></NavItem>
        <NavItem><NavItemLink to="/about" onClick={closeMenu}>Features</NavItemLink></NavItem>
        <NavItem><NavItemLink to="/team" onClick={closeMenu}>Team</NavItemLink></NavItem>
        <NavItem><NavItemLink to="/contact" onClick={closeMenu}>Contact</NavItemLink></NavItem>
      </NavList>
      <BrownButton>Download Proposal</BrownButton>
    </Nav>
  );
};

export default NavBar;
