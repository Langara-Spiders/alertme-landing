import { FormattedMessage, useIntl } from "react-intl";

import BadgeTitle from "../components/BadgeTitle";
import GradientBox from "../components/GradientBox";
import PrimaryBtn from "../components/PrimaryBtn";
import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import palette from "../theme";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${palette.sectionBg};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainHeading = styled.h1`
  text-align: center;
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  color: ${palette.highlightTxt};
`;

const ImageBox = styled.div`
  position: absolute;
  bottom: -210px;
`;

const TextBox = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 270px;
  padding-inline: 16px;
`;

const MainDes = styled.p`
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin: 0;
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const Button = styled(PrimaryBtn)`
  margin-top: 2.75rem;
`;

const GettingStartedSection = () => {
  const intl = useIntl();

  return (
    <Section>
      <GradientBox>
        <BadgeTitle>
          <FormattedMessage
            id="gettingStarted"
            defaultMessage="Getting Started" />
        </BadgeTitle>
        <MainHeading>
          <FormattedMessage
            id="tagine"
            defaultMessage="AlertMe Your Safety Companion" />
        </MainHeading>
        <Button>
          <FormattedMessage
            id="downloadProposalBtn"
            defaultMessage="Download Proposal" />
        </Button>
        <ImageBox>
          <StaticImage
            src="../assets/images/hero.png"
            alt="Hero Image"
            style={{
              width: "100vw",
              height: "490px"
            }}
            objectFit="contain" />
        </ImageBox>
      </GradientBox>
      <TextBox>
        <MainDes>AlertMe <Highlight>warns</Highlight></MainDes>
        <StaticImage
          src="../assets/images/user-avatars.png"
          alt="User Avatar"
          height={64}
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
    </Section>
  )
};

export default GettingStartedSection;
