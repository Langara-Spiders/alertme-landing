import * as React from "react";

import ContactUs from '../components/ContactSection';
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import {
  MainWrapper
} from "../styles/home";
import Navbar from '../components/Navbar';
import NearbyHazardSection from "../components/NearbyHazardSection";
import { StaticImage } from "gatsby-plugin-image"
import TeamSection from '../components/TeamSection';
import styled from 'styled-components';

const GradientBackground = styled.div`
  background: linear-gradient(90deg, #FF994F 0%, #FF4D00 100%);
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const IndexPage = () => {
  return (
    <MainWrapper>
      <GradientBackground>
        <Navbar style={{ alignItems: "center" }} />
        <HeroSection />
      </GradientBackground>
      <NearbyHazardSection />
      <TeamSection />
      <ContactUs />
      <Footer /> 
    </MainWrapper>
  );
}

export default IndexPage;

export const Head = () => <title>About | AlertMe</title>;
