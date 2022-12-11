import { Theme, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '@src/styles/globals'
import { theme } from '@src/styles/theme';
import { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  if (!theme) {
    throw new Error(
      "Can't load the page theme. Make sure that all pages have Page.theme assigned."
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
