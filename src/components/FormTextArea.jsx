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

const Input = styled.textarea`
  background-color: ${palette.sectionBg};
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 12px;
  color: ${palette.contactTxt};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-radius: 1rem;
  border: 3px solid ${palette.contactTxt};
  text-indent: 10px;
  width: 100%;
`;

const FormTextArea = ({
  label,
  placeholder,
  marginTop,
  name,
  required,
}) => {
  return (
    <Box marginTop={marginTop}>
      <Label>{label}</Label>
      <Input
        name={name}
        required={required}
        rows={4}
        placeholder={placeholder}></Input>
    </Box>
  );
};

export default FormTextArea;
