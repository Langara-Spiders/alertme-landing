import * as React from "react"

import {
  Box,
  HeadingText,
  ImageBox,
  MainWrapper
} from "../styles/home"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <MainWrapper>
      <Box>
        <ImageBox>
          <StaticImage
            style={{
              borderRadius: "50%"
            }}
            width={200}
            src="../images/icon.png"
            alt="AlertMe Logo" />
        </ImageBox>
        <HeadingText>AlertMe</HeadingText>
        <p style={{
          textAlign: "center",
          fontSize: "20px"
        }}>Launching Soon...</p>
      </Box>
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>About | AlertMe</title>
