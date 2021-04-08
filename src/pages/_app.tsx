import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from '../styles/GlobalStyles';
import { Theme } from '../styles/Theme';
import { Container } from '../components/Container';
import { GlobalProvider } from '../contexts/GlobalContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={Theme}>
    <MyGlobalStyle />
    <GlobalProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </GlobalProvider>
  </ThemeProvider>
);

export default MyApp;
