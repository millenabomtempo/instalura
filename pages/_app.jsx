/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import GlobalStyle from '../src/components/theme/globalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura | Millena Bomtempo</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
