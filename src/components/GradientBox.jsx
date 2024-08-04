import React from "react";
import palette from "../theme";
import styled from "styled-components";

const GradientBox = styled.div`
  background: linear-gradient(180deg, ${palette.secondary} 0%, ${palette.primary} 100%);
  position: relative;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: ${({paddingTop}) => paddingTop ?? "134px"};
  padding-bottom: ${({paddingBottom}) => paddingBottom ?? 0};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-inline: 16px;
`;

export default GradientBox;
