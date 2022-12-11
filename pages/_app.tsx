import { Theme, ThemeProvider } from '@emotion/react'
import { GlobalStyles } from '@src/styles/globals'
import { ComponentType, ReactNode } from 'react'

export default function App<PropsType>({
  Component,
  pageProps,
}: {
  Component: ComponentType<PropsType> & {
    theme?: Theme;
  };
  pageProps: PropsType;
}) {
  const theme = Component.theme;

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
