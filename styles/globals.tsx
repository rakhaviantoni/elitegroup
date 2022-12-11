import { css, Global, Theme, useTheme } from '@emotion/react'
import { media } from '@src/styles/media'

const globalStyles = (theme: Theme) => css`
  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fontFamily.body};
    color: ${theme.color.bodyText};
  }

  body {
    font-size: ${theme.fontSize.mobile.p};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    all: unset;
    display: block;
    font-family: ${theme.fontFamily.brand};
    font-weight: bold;
    color: ${theme.color.primary};
  }

  h1 {
    font-size: 34px;
    letter-spacing: 0.51px;
    line-height: 1.3;
  }

  h2 {
    font-size: 28px;
    letter-spacing: 0.42px;
    line-height: 1.3;
  }

  h3 {
    font-size: 23px;
    letter-spacing: 0.33px;
    line-height: 1.4;
  }

  h4 {
    font-size: 17px;
    letter-spacing: 0.3px;
    line-height: 1.4;
  }

  h5 {
    font-size: 15px;
    letter-spacing: 0.23px;
    line-height: 1.45;
  }

  p,
  li {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.75;
  }

  .small-text {
    font-size: 14px;
    letter-spacing: 0;
    line-height: 1.75;
  }

  input,
  select,
  textarea,
  button {
    font: inherit;
  }

  ${media.tabletLandscape} {
    body {
      font-size: ${theme.fontSize.p};
    }

    h1 {
      font-size: 50px;
      letter-spacing: 0.75px;
      line-height: 1.25;
    }

    h2 {
      font-size: 40px;
      letter-spacing: 0.6px;
      line-height: 1.35;
    }

    h3 {
      font-size: 28px;
      letter-spacing: 0.42px;
      line-height: 1.35;
    }

    h4 {
      font-size: 22px;
      letter-spacing: 0px;
      line-height: 1.35;
    }

    h5 {
      font-size: 18px;
      letter-spacing: 0.27px;
      line-height: 1.5;
    }

    p,
    li {
      font-size: ${theme.fontSize.p};
      letter-spacing: 0;
      line-height: 1.85;
    }
  }
`

export function GlobalStyles() {
  const theme = useTheme()

  return <Global styles={globalStyles(theme)} />
}
