export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

const devices = {
  xs: `min-width: ${breakpoints.xs}`,
  sm: `min-width: ${breakpoints.sm}`,
  md: `min-width: ${breakpoints.md}`,
  lg: `min-width: ${breakpoints.lg}`,
  xl: `min-width: ${breakpoints.xl}`,
}

export default devices;
