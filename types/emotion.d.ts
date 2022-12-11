import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fontSize: {
      h1: string
      h2: string
      h3: string
      p: string
      pSmall: string
      pXSmall: string

      mobile: {
        h1: string
        h2: string
        h3: string
        p: string
        pSmall: string
        pXSmall: string
      }
    }

    fontFamily: {
      body: string
      brand: string
    }

    borderRadius: {
      big: string
      medium: string
      regular: string
      small: string
      extraSmall: string
      round: string
    }

    color: {
      primary: string
      bodyText: string
      greyText: string
      bodyBackground: string
      overlayBackground: string
    }
  }
}
