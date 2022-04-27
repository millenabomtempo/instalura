/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import GlobalStyle from '../src/components/theme/globalStyle';
import SEO from '../src/components/commons/SEO';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
