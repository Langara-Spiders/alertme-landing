import { AnimationOnScroll } from 'react-animation-on-scroll';
import BadgeTitle from "../components/BadgeTitle";
import { FormattedMessage } from "react-intl";
import MemberBox from "../components/MemberBox";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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

const PaddedBox = styled.div`
  padding-inline: 10px;
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

      <PaddedBox>
        {
          teamList.map((teamMember, idx) => (
            <MemberBox key={idx} {...teamMember} />
          ))
        }
      </PaddedBox>
    </Section>
  );
};

export default TeamSection;

const teamList = [
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/sandeep.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/bryan.png"
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
        defaultMessage="Lead Dev/Full Stack Developer" />
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/karthik.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/simran.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/nandan.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/nikhil.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/rushik.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/palak.png"
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
    )
  },
  {
    imageComponent: (
      <StaticImage
        src="../assets/images/team/rahul.png"
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
    )
  },
]
