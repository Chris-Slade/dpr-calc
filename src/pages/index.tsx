import { CssBaseline, ThemeProvider } from '@mui/material';
import { Calculator } from 'components';
import Head from 'next/head';
import React from 'react';
import theme from '../theme';

export default function Home() {
  return (
    <>
      <Head>
        <title>DPR Calculator</title>
        <meta name="description" content="A DPR calculator for 5e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Calculator />
        </ThemeProvider>
      </main>
    </>
  );
}
