import React from "react";
import palette from "../theme";
import styled from "styled-components";

const Box = styled.div`
  margin-top: ${({marginTop}) => marginTop ?? "2rem"};
`;

const Label = styled.label`
  color: ${palette.contactTxt};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;

const Input = styled.input`
  background-color: ${palette.sectionBg};
  margin-top: 12px;
  color: ${palette.contactTxt};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-radius: 1rem;
  border: 3px solid ${palette.contactTxt};
  height: 50px;
  text-indent: 10px;
  width: 100%;
`;

const FormInput = ({
  label,
  placeholder,
  marginTop,
}) => {
  return (
    <Box marginTop={marginTop}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </Box>
  );
};

export default FormInput;
