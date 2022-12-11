import styled from '@emotion/styled'
import { media } from '@src/styles/media'

export const DesktopOnly = styled.div<{ display?: string }>`
  display: none;
  ${media.tabletLandscape} {
    display: ${({ display }) => (display ? display : 'contents')};
  }
`

export const TabletOnly = styled.div<{ display?: string }>`
  display: none;
  ${media.tabletPortrait} {
    display: ${({ display }) => (display ? display : 'contents')};
  }
  ${media.tabletLandscape} {
    display: none;
  }
`

export const MobileOnly = styled.div<{ display?: string }>`
  display: ${({ display }) => (display ? display : 'contents')};
  ${media.tabletLandscape} {
    display: none;
  }
`
