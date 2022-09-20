import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  ListSubheader,
  Divider,
} from '@mui/material';
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});

const Home = () => {
  const { t } = useTranslation(['common'], { keyPrefix: 'home' });
  return (
    <Container maxWidth='md'>
      <Head>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box paddingTop='5rem'>
        <Typography variant='h1' gutterBottom align='center'>
          {t('welcome-title')}{' '}
          <MuiLink underline='hover' href='https://nextjs.org/'>
            {t('next-template')}
          </MuiLink>
        </Typography>
        <Box padding='2rem'>
          <Typography variant='h6' paragraph align='center'>
            {t('use')}
          </Typography>
          <Typography variant='subtitle1' align='center'>
            {t('disclaimer')}
          </Typography>
          <List component='nav'>
            <ListSubheader>{t('core')}</ListSubheader>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component='a' href='https://nextjs.org/'>
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Next.js
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListSubheader>{t('design')}</ListSubheader>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='https://next.material-ui.com/'
              >
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Material UI
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='https://storybook.js.org/'>
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Storybook
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListSubheader>{t('testing')}</ListSubheader>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component='a' href='https://jestjs.io/'>
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Jest
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='https://testing-library.com/docs/react-testing-library/intro'
              >
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      React Testing Library
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='https://mswjs.io/'>
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Mock Service Worker
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='https://www.cypress.io/'>
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Cypress
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListSubheader>{t('http')}</ListSubheader>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='https://github.com/axios/axios'
              >
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      Axios
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='https://react-query.tanstack.com/'
              >
                <ListItemText
                  primary={
                    <Typography variant='button' color='secondary'>
                      React Query
                    </Typography>
                  }
                  secondary={
                    <Link href='/react-query' passHref>
                      <MuiLink underline='hover'>
                        <Typography variant='subtitle2' component='span'>
                          {t('link-react-query')}
                        </Typography>
                      </MuiLink>
                    </Link>
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

export { getStaticProps };
