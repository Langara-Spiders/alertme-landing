import * as React from "react"

import {
  Box,
  HeadingText,
  ImageBox,
  MainWrapper
} from "../styles/home"

import TeamSection from '../components/TeamSection';
import ContactUs from '../components/ContactSection';

import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <MainWrapper>
      <TeamSection />
      <ContactUs />
      <Footer />
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>About | AlertMe</title>
