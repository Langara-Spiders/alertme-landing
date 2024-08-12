import { AnimationOnScroll } from 'react-animation-on-scroll';
import BadgeTitle from "../components/BadgeTitle";
import { FormattedMessage } from "react-intl";
import MemberBox from "../components/MemberBox";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import devices from '../components/devices';
import palette from "../theme";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${palette.sectionAlt2Bg};
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 16px;
`;

const SubHeading = styled.h2`
  color: ${palette.teamTxt};
  text-align: center;
  font-size: 2.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  padding-inline: 16px;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const MainDes = styled.h3`
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${palette.teamTxt};
  margin: 0;
`;

const GridBox = styled.div`
  padding-inline: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (${devices.lg}) {
    padding-inline: 160px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const TeamSection = () => {
  return (
    <Section id="team">
      <AnimationOnScroll
        animateOnce
        animateIn="animate__swing">
        <BadgeTitle>
          <FormattedMessage
            id="ourTeam"
            defaultMessage="Our Team" />
        </BadgeTitle>
      </AnimationOnScroll>
      <SubHeading>
        <FormattedMessage
          id="talentsBehind"
          defaultMessage="Talents Behind AlertMe" />
      </SubHeading>
      <MainDes>
        <FormattedMessage
          id="teamDesApp"
          defaultMessage="Meet the team that created this app in just 12 weeks! From initial design to final development, we built it from scratch and can't wait to share our creation with you."
        />
      </MainDes>

      <GridBox>
        {
          teamList.map((teamMember, idx) => (
            <AnimationOnScroll
              animateOnce
              animateIn="animate__zoomIn">
              <MemberBox key={idx} {...teamMember} />
            </AnimationOnScroll>
          ))
        }
      </GridBox>
    </Section>
  );
};

export default TeamSection;

const teamList = [
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/sandeep.png"
        placeholder="../assets/images/placeholder/team/sandeep.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Sandeep Guggilla",
    designation: (
      <FormattedMessage
        id="designationPM"
        defaultMessage="PM/Full Stack Developer" />
    ),
    linkedinURL: "/sandeep-guggilla",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/bryan.png"
        placeholder="../assets/images/placeholder/team/bryan.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Bryan Caldeira",
    designation: (
      <FormattedMessage
        id="designationLeadDev"
        defaultMessage="Lead/Full Stack Developer" />
    ),
    linkedinURL: "/bryan-caldeira",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/karthik.png"
        placeholder="../assets/images/placeholder/team/karthik.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Karthik Rhaja",
    designation: (
      <FormattedMessage
        id="designationFE"
        defaultMessage="FrontEnd Developer" />
    ),
    linkedinURL: "/karthik2506",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/simran.png"
        placeholder="../assets/images/placeholder/team/simran.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Simrandeep Kaur",
    designation: (
      <FormattedMessage
        id="designationFE"
        defaultMessage="FrontEnd Developer" />
    ),
    linkedinURL: "/simrandeepkaurd",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/nandan.png"
        placeholder="../assets/images/placeholder/team/nandan.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Nandan Nishad",
    designation: (
      <FormattedMessage
        id="designationFullStack"
        defaultMessage="Full Stack Developer" />
    ),
    linkedinURL: "/nandan-nishad",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/nikhil.png"
        placeholder="../assets/images/placeholder/team/nikhil.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Nikhil Kanda",
    designation: (
      <FormattedMessage
        id="designationLeadDes"
        defaultMessage="Lead/Product Designer" />
    ),
    linkedinURL: "/nikhil-kanda",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/rushik.png"
        placeholder="../assets/images/placeholder/team/rushik.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Rushik Patel",
    designation: (
      <FormattedMessage
        id="designationPE"
        defaultMessage="Product Designer" />
    ),
    linkedinURL: "/rushikpatel20",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/palak.png"
        placeholder="../assets/images/placeholder/team/palak.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Palak Goyal",
    designation: (
      <FormattedMessage
        id="designationPE"
        defaultMessage="Product Designer" />
    ),
    linkedinURL: "/palak-goyal-",
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/rahul.png"
        placeholder="../assets/images/placeholder/team/rahul.png"
        alt="Team Member Image"
        style={{
          width: "100%",
        }}
        objectFit="contain" />
    ),
    name: "Rahul Kota",
    designation: (
      <FormattedMessage
        id="designationPE"
        defaultMessage="Product Designer" />
    ),
    linkedinURL: "/rahul-rathan-kota",
  },
]
