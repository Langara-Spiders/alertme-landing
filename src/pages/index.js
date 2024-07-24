import * as React from "react";

import ContactUs from '../components/ContactSection';
import Footer from "../components/Footer";
import {
  MainWrapper
} from "../styles/home";
import Navbar from '../components/Navbar';
import { StaticImage } from "gatsby-plugin-image"
import TeamSection from '../components/TeamSection';

const IndexPage = () => {
  return (
    <MainWrapper>
      <Navbar style={{alignItems:"center"}}/>
      <TeamSection />
      <ContactUs />
      <Footer />
    </MainWrapper>
  );
}

export default IndexPage;

export const Head = () => <title>About | AlertMe</title>;
