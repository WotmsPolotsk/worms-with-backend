export const MOBILE = "MOBILE";
export const TABLET = "TABLET";
export const DESKTOP = "DESKTOP";

export const BREAKPOINT = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xlg: 1400,
};

export const ADAPTIVE = {
  minWidth: {
    mobileXs: `@media only screen and (min-width: ${BREAKPOINT.xs}px)`,
    mobile: `@media only screen and (min-width: ${BREAKPOINT.sm}px)`,
    tablet: `@media only screen and (min-width: ${BREAKPOINT.md}px)`,
    desktop: `@media only screen and (min-width: ${BREAKPOINT.lg}px)`,
    desktopLg: `@media only screen and (min-width: ${BREAKPOINT.xlg}px)`,
  },
  maxWidth: {
    mobileXs: `@media only screen and (max-width: ${BREAKPOINT.sm - 1}px)`,
    mobile: `@media only screen and (max-width: ${BREAKPOINT.md - 1}px)`,
    tablet: `@media only screen  and (max-width: ${BREAKPOINT.lg - 1}px)`,
    desktop: `@media only screen and (max-width: ${BREAKPOINT.xlg - 1}px)`,
  },
};
