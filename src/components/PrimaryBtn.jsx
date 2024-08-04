import React from "react";
import palette from "../theme";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${({bgColor}) => bgColor ?? palette.primaryBtn1};
  border: none;
  border-radius: 100px;
  color: ${palette.buttonTxt};
  display: inline-flex;
  height: 3.5rem;
  padding: 1rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  z-index: 10;
`;

const PrimaryBtn = ({children, bgColor}) => {
  return (
    <Button bgColor={bgColor}>
      {children}
    </Button>
  )
};

export default PrimaryBtn;
