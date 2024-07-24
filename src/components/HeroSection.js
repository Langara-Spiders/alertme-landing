import {
  BrownButton2,
  HeadingText,
  SubHeadingText,
  WhiteButton
} from "./StyledComponent";

import React from "react";
import { ReactSVG } from 'react-svg';
import { StaticImage } from "gatsby-plugin-image";
import heroBackImage from '../images/Hero-section/Union2.png';
import heroImage from '../images/Hero-section/Union.png';
import styled from "styled-components";
import { useResponsive } from '../hooks/useResponsive';

const HeroContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100vh; 
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin: auto;
  // margin-top: 20px;
  z-index: 1; /*is on top */

  @media screen and (max-width: 768px) {
    background-image: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2; 
`;

const BackImage = styled.div`
  position: relative;
  width: 100%;
  height:300vh
  background-image: url(${heroBackImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 20px;
  z-index: 1; /*is on top */

  @media screen and (max-width: 768px) {
    background-image: none;
  }
`;


const BackgroundColorHerotwo =styled.div`
  background-color: #FFF3EA !important;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
`;


const HeroSection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return(
  
      <div style={{alignContent:"center", justifyContent:"center"}}>
        <HeroContainer>
            <HeroContent style={{textAlign:"center"}}>
              <WhiteButton data-text="Getting Started">Getting Started</WhiteButton>
              <HeadingText style={{textAlign:"center", margin:0}}>AlertMe Your Safety Companion</HeadingText>
              <BrownButton2 style={{marginTop:"20px"}}>Download Proposal</BrownButton2>
        
            <StaticImage
              src="../images/Hero-section/HazardSign.png"
              alt="Hero Image"
              placeholder="blurred"
              layout="fixed"
              width={94}
              height={94}
              style={{
                position:"absolute",
                top:isMobile?400 :365,
                left:isMobile?"50%":0,
                zIndex:0 ,
                width: isMobile? "34px": "94px",
                height: isMobile? "34px": "94px"
              }}
            />
            <StaticImage
              src="../images/Hero-section/ConstructionMale.png"
              alt="Hero Image construction"
              placeholder="blurred"
              layout="fixed"
              width={185}
              height={190}
              style={{
                position:"absolute",
                top:isMobile?380:368,
                right:0,
                zIndex:0,
                width: isMobile? "68px": "185px",
                height: isMobile? "68px": "190px"
              }}
            />
            <StaticImage
              src="../images/Hero-section/FemaleUser.png"
              alt="Hero Image user"
              placeholder="blurred"
              layout="fixed"
              width={216}
              height={216}
              style={{
                position:"absolute",
                top:isMobile?680:700,
                left:0,
                zIndex:0,
                width: isMobile? "68px": "216px",
                height: isMobile? "68px": "216px"
              }}
            />
        
          </HeroContent>
        </HeroContainer>
        <BackgroundColorHerotwo>
              <BackImage>
              </BackImage>
        </BackgroundColorHerotwo>
      </div>
    


  );
};

export default HeroSection;
