import devices, { breakpoints } from "../components/devices";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import BadgeTitle from "../components/BadgeTitle";
import { FormattedMessage } from "react-intl";
import GradientBox from "../components/GradientBox";
import MediaQuery from 'react-responsive'
import PrimaryBtn from "../components/PrimaryBtn";
import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import palette from "../theme";
import styled from "styled-components";

const GettingStartedSection = () => {
  return (
    <Section id="getStarted">
      <GradientBox>
        <StaticImage
          src="../assets/images/mesh.png"
          alt="Hero Image"
          style={{
            height: "1100px",
            position: "absolute",
            zIndex: 1
          }}
          placeholder="none"
          objectFit="contain" />
        <AnimationOnScroll
          style={{
            zIndex: 100
          }}
          animateOnce
          animateIn="animate__swing">
          <BadgeTitle>
            <FormattedMessage
              id="gettingStarted"
              defaultMessage="Getting Started" />
          </BadgeTitle>
        </AnimationOnScroll>
        <AnimationOnScroll
          style={{
            zIndex: 100
          }}
          animateOnce
          animateIn="animate__bounceIn">
          <MainHeading>
            <FormattedMessage
              id="tagine"
              defaultMessage="AlertMe Your Safety Companion" />
          </MainHeading>
        </AnimationOnScroll>
        <AnimationOnScroll
          style={{
            zIndex: 100
          }}
          animateOnce
          animateIn="animate__bounceIn">
          <Button>
            <FormattedMessage
              id="downloadProposalBtn"
              defaultMessage="Download Proposal" />
          </Button>
        </AnimationOnScroll>
        <ImageBox>
          <MediaQuery maxWidth={breakpoints.lg}>
          <AnimationOnScroll
            animateOnce
            animateIn="animate__fadeInUp">
            <StaticImage
              src="../assets/images/hero-sm.png"
              alt="Hero Image"
              style={{
                width: "100vw",
                zIndex: 1
              }}
              placeholder="none"
              objectFit="contain" />
            </AnimationOnScroll>
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.lg}>
            <AnimationOnScroll
              animateOnce
              animateIn="animate__fadeInUp">
              <StaticImage
                src="../assets/images/hero-lg.png"
                alt="Hero Image"
                style={{
                  width: "100%",
                  zIndex: 1
                }}
                placeholder="none"
                objectFit="contain" />
            </AnimationOnScroll>
          </MediaQuery>
        </ImageBox>
      </GradientBox>
      <AnimationOnScroll
        animateOnce
        duration="1.5"
        animateIn="animate__fadeInUp">
        <TextBox>
          <MainDes>AlertMe <Highlight>warns</Highlight></MainDes>
          <StaticImage
            src="../assets/images/user-avatars.png"
            alt="User Avatar"
            height={64}
            placeholder="none"
            objectFit="contain" />
          <MainDes>
            <FormattedMessage
              id="mainDes"
              defaultMessage="users of nearby construction and {road} {hazards}, and allowing them to report {issues} and workers to confirm alerts, {enhancing} city {safety}."
              values={{
                road: <Highlight><FormattedMessage id="mainDes.highlightRoad" defaultMessage="road" /></Highlight>,
                hazards: <Highlight><FormattedMessage id="mainDes.highlightHazards" defaultMessage="hazards" /></Highlight>,
                issues: <Highlight><FormattedMessage id="mainDes.highlightIssues" defaultMessage="issues" /></Highlight>,
                enhancing: <Highlight><FormattedMessage id="mainDes.highlightEnhancing" defaultMessage="enhancing" /></Highlight>,
                safety: <Highlight><FormattedMessage id="mainDes.highlightSafety" defaultMessage="safety" /></Highlight>,
              }}
            />
          </MainDes>
        </TextBox>
      </AnimationOnScroll>
    </Section>
  )
};

export default GettingStartedSection;


const Section = styled.section`
  background-color: ${palette.sectionBg};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainHeading = styled.h1`
  z-index: 2;
  text-align: center;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: ${palette.highlightTxt};

  @media only screen and (${devices.lg}) {
    font-size: 6.875rem;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  bottom: -260px;
  z-index: 2;

  @media only screen and (${devices.lg}) {
    top: 510px;
    bottom: auto;
    padding-inline: 160px;
  }
`;

const TextBox = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 270px;
  padding-inline: 16px;

  @media only screen and (${devices.lg}) {
    padding-inline: 160px;
    margin-top: 600px;
  }
`;

const MainDes = styled.p`
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin: 0;

  @media only screen and (${devices.lg}) {
    font-size: 4rem;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const Button = styled(PrimaryBtn)`
  margin-top: 2.75rem;
`;
