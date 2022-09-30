import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Head from 'next/head';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  HydrateProps,
} from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { theme } from '../theme/theme';

const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState?: HydrateProps['state'] }>) => {
  // create and single instance of queryClient
  const [queryClient] = useState(() => new QueryClient());
  return (
    <CacheProvider value={cache}>
      <Head>
        <title>FulanoD3Tal</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          {/* if some data is comming deshydrate,here we give some water
           * make and enfasis of have the save name por the pageProps
           * in this example is `dehydratedState`, and in the functions
           * getStaticProps and getServerSideProps we have to return the same
           * name property
           */}
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
// TODO: Fix this types problem with next-i18next
export default appWithTranslation<never>(MyApp);
