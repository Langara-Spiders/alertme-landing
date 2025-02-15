import { keyframes } from 'styled-components'

export const rotateImage = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const headingBlink = keyframes`
  50% {
    opacity: 0;
  }
`
