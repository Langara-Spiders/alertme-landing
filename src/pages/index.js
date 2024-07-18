import * as React from "react"

import {
  Box,
  ImageBox,
  MainWrapper,
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
            alt="A dinosaur" />
        </ImageBox>
        <p style={{
          textAlign: "center",
          fontSize: "40px"
        }}>Coming Soon...</p>
      </Box>
    </MainWrapper>
  )
}

export default IndexPage

export const Head = () => <title>About | AlertMe</title>
