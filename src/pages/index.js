import "../style.css"
import "animate.css/animate.min.css";

import * as React from "react";

import { FormattedDate, FormattedMessage, IntlProvider } from "react-intl";

import ContactSection from "../sections/Contact";
import FeatureSection from "../sections/Feature";
import GettingStartedSection from "../sections/GettingStarted";
import Navbar from "../components/Navbar";
import PrimaryBtn from "../components/PrimaryBtn";
import { StaticImage } from "gatsby-plugin-image";
import TeamSection from "../sections/Team";
import en from "../locales/en.json";
import fr from "../locales/fr.json";
import palette from "../theme";
import styled from "styled-components";

const messages = {
  en,
  fr,
};


const Footer = styled.footer`
  background-color: ${palette.footerBg};
  padding-top: 70px;
  padding-bottom: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CopyRightTxt = styled.p`
  color: ${palette.footerTxt};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const IndexPage = () => {
  return (
    <IntlProvider messages={messages["en"]} locale="en" defaultLocale="en">
      <main>
        <Navbar />
        <GettingStartedSection />
        <FeatureSection />
        <TeamSection />
        <ContactSection />
        <Footer>
          <PrimaryBtn bgColor={palette.primaryBtn2}>
            <FormattedMessage
              id="downloadProposalBtn"
              defaultMessage="Download Proposal" />
          </PrimaryBtn>
          <StaticImage
            src="../assets/images/logo-alt.png"
            alt="Logo Full Image"
            style={{
              maxWidth: "200px",
              marginTop: "5rem",
            }}
            objectFit="contain" />
          <CopyRightTxt>
            <FormattedMessage
              id="copyright.part1"
              defaultMessage="All rights reserved"
            /><br />
            <FormattedMessage
              id="copyright.part2"
              defaultMessage="© {year} Team AlertMe"
              values={{
                year: (
                  <FormattedDate
                    value={new Date()}
                    year="numeric" />
                )
              }}
            />
          </CopyRightTxt>
        </Footer>
      </main>
    </IntlProvider>
  );
}

export default IndexPage;

export const Head = () => <title>About | AlertMe</title>;
