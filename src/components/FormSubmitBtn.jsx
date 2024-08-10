import React from "react";
import devices from "./devices";
import palette from "../theme";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 2rem;
  background-color: ${palette.primaryBtn1};
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
  width: 100%;

  @media only screen and (${devices.lg}) {
    width: 300px;
  }
`;

const FormSubmitBtn = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  )
};

export default FormSubmitBtn;
