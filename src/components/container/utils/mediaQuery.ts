const breakpoints = {
  xs: 375,
  sm: 425,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const mediaQueries = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[key]}px)`;
