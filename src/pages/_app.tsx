import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from '../styles/GlobalStyles';
import { Theme } from '../styles/Theme';
import { Container } from '../components/Container';
import { GlobalProvider } from '../contexts/GlobalContext';
import GitHubCorner from '../components/GitHubCorner';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={Theme}>
    <MyGlobalStyle />
    <GlobalProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </GlobalProvider>
    <GitHubCorner projectUrl="https://github.com/RenatoLomba/web-curriculum" />
  </ThemeProvider>
);

export default MyApp;
