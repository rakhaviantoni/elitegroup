export const pxBreakpoints = {
  mobile: 0,
  tabletPortrait: 600,
  tabletLandscape: 1000,
  desktop: 1200,
  bigDesktop: 1440
}

export const media = {
  mobileOnly: `@media (max-width: ${pxBreakpoints.tabletPortrait - 1}px)`,
  tabletPortrait: `@media (min-width: ${pxBreakpoints.tabletPortrait - 1}px)`,
  tabletLandscape: `@media (min-width: ${pxBreakpoints.tabletLandscape - 1}px)`,
  tabletLandscapeDown: `@media (max-width: ${pxBreakpoints.tabletLandscape - 2}px)`,
  desktop: `@media (min-width: ${pxBreakpoints.desktop - 1}px)`,
  desktopDown: `@media (max-width: ${pxBreakpoints.desktop - 2}px)`,
  bigDesktop: `@media (min-width: ${pxBreakpoints.bigDesktop - 1}px)`,
  bigDesktopDown: `@media (max-width: ${pxBreakpoints.bigDesktop - 2}px)`
}

export const imageMedia = {
  mobile: `(max-width: ${pxBreakpoints.tabletPortrait - 1}px)`,
  tabletPortrait: `(min-width: ${pxBreakpoints.tabletPortrait - 1}px)`,
  tabletLandscape: `(min-width: ${pxBreakpoints.tabletLandscape - 1}px)`,
  desktop: `(min-width: ${pxBreakpoints.desktop - 1}px)`,
  bigDesktop: `(min-width: ${pxBreakpoints.bigDesktop - 1}px)`
}
