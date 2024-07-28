import React from "react";
import palette from "../theme";
import styled from "styled-components";

const Badge = styled.button`
  background-color: ${palette.badgeBg};
  border: none;
  border-radius: 100px;
  display: inline-flex;
  padding: 0.475rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.39581rem;
`

const Title = styled.p`
  background: linear-gradient(90deg, ${palette.primary} 0%, ${palette.secondary} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.9rem;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`

const BadgePrimary = ({children}) => {
  return (
    <Badge>
      <Title>
        {children}
      </Title>
    </Badge>
  );
};

export default BadgePrimary;
