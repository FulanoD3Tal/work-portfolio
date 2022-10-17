import Head from 'next/head';
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ContactMe from '../components/ContactMe/ContactMe';
import Features from '../components/Features/Features';

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

const Home = () => {
  const { t } = useTranslation(['common']);

  // TODO: Move this to enviroment variables
  const urlDeploy = 'fulanod3tal.com';
  return (
    <>
      <Head>
        <meta name='description' content={t('page-description')} />
        <link rel='icon' href='/favicon.ico' />
        {/* Facebook and media og image */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fulanod3tal.com' />
        <meta property='og:title' content='FulanoD3Tal' />
        <meta property='og:description' content={t('page-description')} />
        <meta
          property='og:image'
          content={`https://${urlDeploy}/images/banner.png`}
        />
        {/* Twitter og image */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://fulanod3tal.com' />
        <meta property='twitter:title' content='FulanoD3Tal' />
        <meta property='twitter:description' content={t('page-description')} />
        <meta
          property='twitter:image'
          content={`https://${urlDeploy}/images/banner.png`}
        />
      </Head>
      <NavBar />
      <Box component='main'>
        <Hero />
        <Features />
        <ContactMe />
      </Box>
    </>
  );
};

export default Home;

export { getStaticProps };
