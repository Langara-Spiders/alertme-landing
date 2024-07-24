// src/components/Footer.js

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';


const FooterWrapper  = styled.footer`
background-color: #fcefe3;
`;

const FooterContainer = styled.footer`
  background-color: #2B1200;
  padding: 3em 0;
  border-radius: 40px 40px 0 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.a`
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  width: 225px;
  height: 40px;
  cursor: pointer;
  border-radius: var(--radius-100, 100px);
  background: var(--Color-Primary-primart-850, #FF7714);

  &:hover {
    background: #555;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterContainer>
        <Container>
            <StaticImage
            src="../images/logo.png"
            alt="Logo"
            placeholder="blurred"
            layout="fixed"
            width={100}
            />
            {/* <Button>
            Download Proposal
            </Button> */}
        </Container>
        </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

