import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const { t } = useTranslation(['common']);
  return (
    <AppBar
      elevation={0}
      position='static'
      sx={{ backgroundColor: 'background.default' }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ display: 'flex' }}>
          <List
            sx={{
              display: 'flex',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              marginLeft: 'auto',
            }}
          >
            <Link href='/' passHref>
              <ListItemButton component='a'>
                <ListItemText>{t('home')}</ListItemText>
              </ListItemButton>
            </Link>
            <Link href='/#my-services' passHref>
              <ListItemButton component='a'>
                <ListItemText>{t('services')}</ListItemText>
              </ListItemButton>
            </Link>
            <Link href='/#my-work' passHref>
              <ListItemButton component='a'>
                <ListItemText>{t('my-work')}</ListItemText>
              </ListItemButton>
            </Link>
            <Link href='/#contact-me' passHref>
              <ListItemButton
                component='a'
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover &:focus': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ListItemText>{t('contact-me')}</ListItemText>
              </ListItemButton>
            </Link>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
