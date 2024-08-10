import MediaQuery, { useMediaQuery } from 'react-responsive'
import devices, { breakpoints } from '../components/devices';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import BadgeTitle from "../components/BadgeTitle";
import FeatureBox from "../components/FeatureBox";
import { FormattedMessage } from "react-intl";
import GradientBox from "../components/GradientBox";
import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import palette from "../theme";
import styled from "styled-components";

const FeatureSection = () => {
  const isLargeDevice = useMediaQuery({
    query: `(${devices.md})`
  })

  return (
    <Section>
      <MediaQuery minWidth={breakpoints.md}>
        <StaticImage
          src="../assets/images/civilian-lg.png"
          alt="User Avatar"
          style={{
            width: "100%",
            marginBottom: "-10px",
          }}
          placeholder="none"
          objectFit="contain" />
      </MediaQuery>
      <MediaQuery maxWidth={breakpoints.md}>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__zoomIn">
          <StaticImage
            src="../assets/images/civilian-sm.png"
            alt="User Avatar"
            style={{
              width: "100%",
              marginBottom: "-10px",
            }}
            placeholder="none"
            objectFit="contain" />
        </AnimationOnScroll>
      </MediaQuery>
      <GradientBox
        paddingTop="64px"
        paddingBottom="100px">
        <span id="features"></span>
        <BadgeTitle>
          <FormattedMessage
            id="featuresForCivilians"
            defaultMessage="Features For Civilians"/>
        </BadgeTitle>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__bounceIn">
          <SubHeading>
            <FormattedMessage
              id="subHeadingCivilian"
              defaultMessage="Get alerts, report hazards, stay safe." />
          </SubHeading>
        </AnimationOnScroll>
        <MediaQuery maxWidth={breakpoints.md}>
          <GridBox>
            {
              featuresListCivilian.map((feature, idx) => (
                <AnimationOnScroll
                  animateOnce
                  animateIn="animate__fadeInUp">
                  <FeatureBox key={idx} {...feature} />
                </AnimationOnScroll>
              ))
            }
          </GridBox>
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.md}>
          <div
            style={{
              paddingInline: "160px"
            }}>
            <StaticImage
              src="../assets/images/feature/feature-grid-user.png"
              alt="Notifications Feature Image"
              style={{
                width: "100%",
                height: "100%",
                marginTop: "60px",
                marginBottom: "80px",
              }}
              placeholder="none"
              objectFit="contain" />
          </div>
        </MediaQuery>
      </GradientBox>
      <AnimationOnScroll
        animateOnce
        animateIn="animate__bounceIn">
        <SubHeadingInner>
          <FormattedMessage
            id="subDes"
            defaultMessage="{receive} {alerts} {bellIcon} on nearby hazards and report issues to {stay} {safe}"
            values={{
              receive: <Highlight><FormattedMessage id="subDes.receive" defaultMessage="Recieve" /></Highlight>,
              alerts: <Highlight><FormattedMessage id="subDes.alerts" defaultMessage="alerts" /></Highlight>,
              stay: <Highlight><FormattedMessage id="subDes.stay" defaultMessage="stay" /></Highlight>,
              safe: <Highlight><FormattedMessage id="subDes.safe" defaultMessage="safe." /></Highlight>,
              bellIcon: (
                <AnimationOnScroll
                  style={{
                    display: "inline-block"
                  }}
                  delay="2"
                  animateOnce
                  animateIn="animate__swing">
                  🔔
                </AnimationOnScroll>
              )
            }} />
        </SubHeadingInner>
      </AnimationOnScroll>
        <StaticImage
          src="../assets/images/notifications-feature.png"
          alt="Notifications Feature Image"
          style={{
            width: "100%",
            height: isLargeDevice ? "800px" : "284px",
            marginTop: "60px",
            marginBottom: "80px",
          }}
          placeholder="none"
          objectFit="contain" />
      <ColourBox>
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingInline: isLargeDevice ? "160px" : "0",
            justifyContent: "left"
          }}>
          <AnimationOnScroll
            animateOnce
            animateIn="animate__bounceIn">
            <SubHeadingInner>
              <FormattedMessage
                id="subDes"
                defaultMessage="{alertme} for Construction {workers} to manage and respond to site {hazards} {hazardIcon} in real-time."
                values={{
                  alertme: <Highlight><FormattedMessage id="subDes.alertme" defaultMessage="AlertMe" /></Highlight>,
                  workers: <Highlight><FormattedMessage id="subDes.workers" defaultMessage="Workers" /></Highlight>,
                  hazards: <Highlight><FormattedMessage id="subDes.hazards" defaultMessage="Hazards" /></Highlight>,
                  hazardIcon: (
                    <AnimationOnScroll
                    style={{
                      display: "inline-block",
                    }}
                    delay="2"
                    duration="1.5"
                    animateOnce
                    animateIn="animate__flash">
                      ⚠️
                    </AnimationOnScroll>
                  )
                }} />
            </SubHeadingInner>
          </AnimationOnScroll>
        </div>
        <MediaQuery
          minWidth={breakpoints.md}>
          <div
            style={{
              textAlign: "right",
              paddingInline: "160px"
            }}>
            <StaticImage
              src="../assets/images/worker-lg.png"
              alt="Worker Avatar"
              style={{
                width: "calc(100% - 20%)",
                marginTop: "80px",
                marginBottom: "80px",
              }}
              placeholder="none"
              objectFit="contain" />
          </div>
      </MediaQuery>
      <MediaQuery
        maxWidth={breakpoints.md}>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__zoomIn">
          <StaticImage
            src="../assets/images/worker-sm.png"
            alt="Worker Avatar"
            style={{
              width: "100%",
              marginTop: "80px",
              marginBottom: "80px",
            }}
            placeholder="none"
            objectFit="contain" />
        </AnimationOnScroll>
      </MediaQuery>
        <BadgeTitle>
          <FormattedMessage
            id="workersFeatures"
            defaultMessage="Features for Construction Workers" />
        </BadgeTitle>
        <AnimationOnScroll
          animateOnce
          animateIn="animate__bounceIn">
          <SubHeading>
            <FormattedMessage
              id="subHeadingWorker"
              defaultMessage="Post, Manage, and Resolve Hazards with Real-Time Updates" />
          </SubHeading>
        </AnimationOnScroll>
        <GridBox>
          {
            featuresListWorker.map((feature, idx) => (
              <AnimationOnScroll
                animateOnce
                animateIn="animate__fadeInUp">
                <FeatureBox key={idx} {...feature} />
              </AnimationOnScroll>
            ))
          }
        </GridBox>
      </ColourBox>
    </Section>
  )
};

export default FeatureSection;


const Section = styled.section`
  width: 100%;
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

  @media only screen and (${devices.lg}) {
    padding-inline: 300px;
    line-height: 1.25;
  }
`;

const SubHeadingInner = styled(SubHeading)`
  font-weight: 400;
  margin: 80px 0 0;
  padding-inline: 55px;

  @media only screen and (${devices.lg}) {
    text-align: left;
    padding: 0;
    max-width: 800px;
  }
`;

const Highlight = styled.span`
  color: ${palette.featureTxt};
  font-weight: 700;
`;

const GridBox = styled.div`
  padding-inline: 16px;
  display: grid;
  gap: 10px;

  @media only screen and (${devices.md}) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }

  @media only screen and (${devices.lg}) {
    padding-inline: 160px;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
`;

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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
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
        placeholder="none"
        objectFit="contain" />
    )
  },
]
