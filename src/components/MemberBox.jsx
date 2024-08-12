import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import palette from "../theme";
import styled from "styled-components";

const PaddedBox = styled.div`
  margin-top: 3rem;
  flex: 1;
  min-width: 30%;
  padding: 20px;
  box-sizing: border-box;
`;

const ImageBox = styled.div`
`;

const NameTxt = styled.p`
  color: ${palette.teamAltTxt};
  text-align: center;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0;
  margin-top: 2.5rem;
`;

const DesgTxt = styled.p`
  color: ${palette.teamAltTxt};
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 0.75rem;
`;

const MemberBox = ({
  imageComponent,
  name,
  designation,
  linkedinURL,
}) => {

  return (
    <PaddedBox>
      <ImageBox>
        {imageComponent}
      </ImageBox>
      <NameTxt>
        {name}
      </NameTxt>
      <DesgTxt>
        {designation}
      </DesgTxt>
      <a
        href={`https://www.linkedin.com/in${linkedinURL}`}
        target="_blank"
        style={{
          display: "inline-flex",
          color: palette.linkTxt,
          marginTop: "-20px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          width: "100%",
          textDecoration: "none"
        }}>
        <StaticImage
          src="../assets/images/linkedin-icon.png"
          alt="LinkedIn Logo"
          style={{
            width: "38px",
            height: "38px",
          }}
          placeholder="none"
          objectFit="contain" />
        &nbsp;{linkedinURL}
      </a>
    </PaddedBox>
  );
};

export default MemberBox;
