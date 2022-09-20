import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'next-i18next';
import React from 'react';

const NavBar = () => {
  const { t } = useTranslation(['common']);
  return (
    <AppBar elevation={0} sx={{ backgroundColor: 'background.default' }}>
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
          <ListItem>
            <ListItemText>{t('home')}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{t('services')}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{t('my-work')}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{t('contact-me')}</ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
