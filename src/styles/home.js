import { rotateImage } from "./animation"
import styled from "styled-components"

export const MainWrapper = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div``

export const ImageBox = styled.div`
  animation: ${rotateImage} 5s linear infinite;
`
