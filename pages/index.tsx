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
  return (
    <>
      <Head>
        <meta name='description' content={t('page-description')} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Hero />
    </>
  );
};

export default Home;

export { getStaticProps };
