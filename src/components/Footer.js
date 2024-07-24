import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { YellowButton } from './StyledComponent'; // Ensure correct path

const FooterWrapper = styled.footer`
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
  flex-direction: row; /* Default layout: row */
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: center;
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
          <YellowButton>
            Download Proposal
          </YellowButton>
        </Container>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;


