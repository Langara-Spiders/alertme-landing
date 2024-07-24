import * as React from "react";

import ContactUs from '../components/ContactSection';
import {
  MainWrapper
} from "../styles/home";
import Navbar from '../components/Navbar';

const IndexPage = () => {
  return (
    <MainWrapper>
      <Navbar style={{alignItems:"center"}}/>
      <ContactUs />
    </MainWrapper>
  );
}

export default IndexPage;

export const Head = () => <title>About | AlertMe</title>;
