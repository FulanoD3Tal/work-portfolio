import Head from 'next/head';
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

const Home = () => {
  const { t } = useTranslation(['common']);

  const urlDeploy = process.env.NEXT_PUBLIC_VERCEL_URL;
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
      <Hero />
    </>
  );
};

export default Home;

export { getStaticProps };
