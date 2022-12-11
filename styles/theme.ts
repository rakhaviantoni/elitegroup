import { Theme } from '@emotion/react'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

const systemFont =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

// @see types/emotion.d.ts
export const theme: Theme = {
  fontSize: {
    h1: '50px',
    h2: '40px',
    h3: '28px',
    p: '14px',
    pSmall: '13px',
    pXSmall: '12px',

    mobile: {
      h1: '34px',
      h2: '28px',
      h3: '23px',
      p: '16px',
      pSmall: '14px',
      pXSmall: '12px'
    }
  },

  fontFamily: {
    body: `Poppins, ${systemFont}`,
    brand: `Poppins, ${systemFont}`
  },

  borderRadius: {
    big: '5rem',
    medium: '2rem',
    regular: '1rem',
    small: '0.35rem',
    extraSmall: '0.25rem',
    round: '100rem'
  },

  color: {
    primary: '##B2294B',
    bodyText: '#1E1E1E',
    greyText: '#878787',
    bodyBackground: '#FAFAFA',
    overlayBackground: '#FBF4F6'
  }
}
