import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Link as MuiLink,
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { QueryClient, useQuery, dehydrate } from '@tanstack/react-query';
import api, { handleError, TError } from '../restful/api';
/**
 * Example of fetch function
 */
const fetchPosts = async () => {
  const response = await api.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};
/**
 * This is where we prefetch the data we want to be available
 * as the page render
 */
const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  // here we fetch the data in the server
  await queryClient.prefetchQuery(['test'], fetchPosts);
  return {
    props: {
      // and pass to client
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

const Client = () => {
  const theme = useTheme();
  const { t } = useTranslation(['common'], { keyPrefix: 'home' });
  /**
   * Here we use the same implementation as
   * normal, but in runtime there will be no
   * waiting time, cause there are already data
   * at less for first render
   */
  const { data, isLoading, isError, error } = useQuery<
    { id: number; body: string; title: string }[],
    TError
  >(['test'], fetchPosts);
  return (
    <Container>
      <Head>
        <title>{t('react-query-example')}</title>
      </Head>
      <Typography
        variant='h1'
        align='center'
        paddingTop='5rem'
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        {t('react-query-example')}
      </Typography>

      <Link href='/' passHref>
        <MuiLink underline='hover'>{t('return-link')}</MuiLink>
      </Link>

      <Typography component='div' variant='subtitle1'>
        {t('file')}
        <Typography variant='button' sx={{ color: theme.palette.primary.main }}>
          {' '}
          `pages/react-query.tsx`{' '}
        </Typography>
        {t('file-middle')}{' '}
        <Typography variant='button' sx={{ color: theme.palette.primary.main }}>
          {' '}
          `pages/_app.tsx`{' '}
        </Typography>
        {t('file-end')}
      </Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {isError && <Typography>{handleError(error)}</Typography>}
      <List>
        {data &&
          data.map((post) => (
            <ListItem key={post.id}>
              <ListItemButton>
                <ListItemText primary={post.title} secondary={post.body} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Client;

export { getStaticProps };
