import BadgeTitle from "../components/BadgeTitle";
import FeatureBox from "../components/FeatureBox";
import { FormattedMessage } from "react-intl";
import GradientBox from "../components/GradientBox";
import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import palette from "../theme";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 90px;
  background-color: ${palette.sectionBg};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ColourBox = styled.section`
  background-color: ${palette.sectionAlt1Bg};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 80px;
`;

const SubHeading = styled.h2`
  color: ${palette.featureTxt};
  text-align: center;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  padding-inline: 16px;
`;

const SubHeadingInner = styled(SubHeading)`
  font-weight: 400;
  margin: 80px 0 0;
  padding-inline: 55px;
`;

const Highlight = styled.span`
  color: ${palette.featureTxt};
  font-weight: 700;
`;

const PaddedWrapper = styled.div`
  padding-inline: 16px;
`;

const FeatureSection = () => {
  return (
    <Section>
      <StaticImage
        src="../assets/images/civilian.png"
        alt="User Avatar"
        style={{
          width: "100%",
          marginBottom: "-10px",
        }}
        objectFit="contain" />
      <GradientBox
        paddingTop="64px"
        paddingBottom="100px">
        <BadgeTitle>
          <FormattedMessage
            id="featuresForCivilians"
            defaultMessage="Features For Civilians"/>
        </BadgeTitle>
        <SubHeading>
          <FormattedMessage
            id="subHeadingCivilian"
            defaultMessage="Get alerts, report hazards, stay safe." />
        </SubHeading>
        {
          featuresListCivilian.map((feature, idx) => (
            <FeatureBox key={idx} {...feature} />
          ))
        }
      </GradientBox>
      <SubHeadingInner>
        <FormattedMessage
          id="subDes"
          defaultMessage="{receive} {alerts} 🔔 on nearby hazards and report issues to {stay} {safe}"
          values={{
            receive: <Highlight><FormattedMessage id="subDes.receive" defaultMessage="Recieve" /></Highlight>,
            alerts: <Highlight><FormattedMessage id="subDes.alerts" defaultMessage="alerts" /></Highlight>,
            stay: <Highlight><FormattedMessage id="subDes.stay" defaultMessage="stay" /></Highlight>,
            safe: <Highlight><FormattedMessage id="subDes.safe" defaultMessage="safe." /></Highlight>,
          }} />
      </SubHeadingInner>
      <StaticImage
        src="../assets/images/notifications-feature.png"
        alt="Notifications Feature Image"
        style={{
          width: "100%",
          height: "284px",
          marginTop: "60px",
          marginBottom: "80px",
        }}
        objectFit="contain" />
      <ColourBox>
        <SubHeadingInner>
          <FormattedMessage
            id="subDes"
            defaultMessage="{alertme} for Construction {workers} to manage and respond to site {hazards} ⚠️ in real-time."
            values={{
              alertme: <Highlight><FormattedMessage id="subDes.alertme" defaultMessage="AlertMe" /></Highlight>,
              workers: <Highlight><FormattedMessage id="subDes.workers" defaultMessage="Workers" /></Highlight>,
              hazards: <Highlight><FormattedMessage id="subDes.hazards" defaultMessage="Hazards" /></Highlight>,
            }} />
        </SubHeadingInner>
        <StaticImage
          src="../assets/images/worker.png"
          alt="User Avatar"
          style={{
            width: "100%",
            marginTop: "80px",
            marginBottom: "80px",
          }}
          objectFit="contain" />
        <BadgeTitle>
          <FormattedMessage
            id="workersFeatures"
            defaultMessage="Features for Construction Workers" />
        </BadgeTitle>
        <SubHeading>
          <FormattedMessage
            id="subHeadingWorker"
            defaultMessage="Post, Manage, and Resolve Hazards with Real-Time Updates" />
        </SubHeading>
        <PaddedWrapper>
          {
            featuresListWorker.map((feature, idx) => (
              <FeatureBox key={idx} {...feature} />
            ))
          }
        </PaddedWrapper>
      </ColourBox>
    </Section>
  )
};

export default FeatureSection;

const featuresListCivilian = [
  {
    heading: <FormattedMessage id="feat1-heading" defaultMessage="Incident reporting" />,
    description: <FormattedMessage id="feat1-des" defaultMessage="Bypassers, riders, and workers can report incidents with GPS, a description, and photos for safety." />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image1.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat2-heading" defaultMessage="On-going Incidents" />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image2.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat3-heading" defaultMessage="On-going Incidents" />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image3.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat4-heading" defaultMessage="Incident Tracking" />,
    description: <FormattedMessage id="feat1-des" defaultMessage="Monitor reported incidents in real-time, track their status, and see updates on resolved issues." />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image4.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat5-heading" defaultMessage="Rewards" />,
    description: <FormattedMessage id="feat5-des" defaultMessage="Earn rewards for reporting hazards and contributing to community safety. Your efforts make a difference!" />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image5.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
]

const featuresListWorker = [
  {
    heading: <FormattedMessage id="feat6-heading" defaultMessage="Geofencing" />,
    description: <FormattedMessage id="feat6-des" defaultMessage="Set virtual boundaries to alert users when they approach or enter hazardous areas." />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image6.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat7-heading" defaultMessage="Incident reporting" />,
    description: <FormattedMessage id="feat7-des" defaultMessage="Submit and manage hazard reports with GPS, descriptions, and photos." />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image7.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
  {
    heading: <FormattedMessage id="feat8-heading" defaultMessage="Initiate Actions" />,
    description: <FormattedMessage id="feat8-des" defaultMessage="Approve or reject hazard reports, and take necessary safety measures." />,
    imageComponent: (
      <StaticImage
        src="../assets/images/feature/feature-image8.png"
        alt="Feature Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    )
  },
]
