import {
  headingBlink,
  rotateImage
} from "./animation"

import styled from "styled-components"

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  margin: 0;
  padding: 0;
`

export const Box = styled.div``

export const ImageBox = styled.div`
  animation: ${rotateImage} 5s linear infinite;
`

export const HeadingText = styled.h2`
  text-align: center;
  color: #FF6B00;
  font-size: 40px;
  animation: ${headingBlink} 2s linear infinite;
`
