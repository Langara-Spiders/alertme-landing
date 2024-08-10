import React from "react";
import palette from "../theme";
import styled from "styled-components";

const BorderBox = styled.div`
  margin-top: 25px;
  background-color: ${palette.featureBg};
  padding: 19px 19px 0 19px;
  border-radius: 16px;
`;

const ImageBox = styled.div`
  padding: 10px 10px 0 10px;
`;

const Heading = styled.h3`
  color: ${palette.featureTxt};
  margin: 0;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

const Description = styled.p`
  color: ${palette.featureTxt};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const FeatureBox = ({
  heading,
  description,
  imageComponent
}) => {
  return (
    <BorderBox>
      <Heading>
        ⭐️ {heading}
      </Heading>
      {
        description ? (
          <Description>
            {description}
          </Description>
        ) : null
      }
      <ImageBox>
        {imageComponent}
      </ImageBox>
    </BorderBox>
  );
};

export default FeatureBox;
