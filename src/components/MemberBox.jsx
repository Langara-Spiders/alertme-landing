import React from "react";
import palette from "../theme";
import styled from "styled-components";

const PaddedBox = styled.div`
  margin-top: 5rem;
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
  linkedInLink,
  portfolioLink,
  githubLink,
  behanceLink
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
    </PaddedBox>
  );
};

export default MemberBox;
