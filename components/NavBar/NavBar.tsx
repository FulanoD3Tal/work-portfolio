import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List, { ListProps } from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Typography from '@mui/material/Typography';

const NavList = ({ sx }: { sx?: ListProps['sx'] }) => {
  const { t } = useTranslation(['common']);
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 5,
        alignItems: { xs: 'end', sm: 'center' },
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        marginLeft: 'auto',
        ...sx,
      }}
    >
      <Link href='/' passHref>
        <ListItemButton component='a'>
          <ListItemText>{t('home')}</ListItemText>
        </ListItemButton>
      </Link>
      <Link href='#my-services' passHref>
        <ListItemButton component='a'>
          <ListItemText>{t('services')}</ListItemText>
        </ListItemButton>
      </Link>
      <Link href='#my-work' passHref>
        <ListItemButton component='a'>
          <ListItemText>{t('my-work')}</ListItemText>
        </ListItemButton>
      </Link>
      <Link href='#contact-me' passHref>
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
  );
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(['common']);

  const toggleDrawer = () => setOpen(!open);
  return (
    <AppBar
      elevation={0}
      position='static'
      sx={{ backgroundColor: 'background.default' }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ display: 'flex' }}>
          <Typography
            component='h1'
            aria-label={`FulanoD3Tal | ${t('you-have-the-ideas')}, ${t(
              'i-can-make-them'
            )} ${t('real')}`}
            sx={{ fontWeight: 700, fontSize: '1.2rem' }}
          >
            FulanoD3Tal
          </Typography>
          <NavList sx={{ display: { xs: 'none', md: 'flex' } }} />
          <IconButton
            onClick={toggleDrawer}
            aria-label='menu'
            sx={{ marginLeft: 'auto', display: { xs: 'block', md: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Drawer
            sx={{ display: { xs: 'block', md: 'none' } }}
            anchor='right'
            open={open}
            onClose={toggleDrawer}
          >
            <Box
              sx={{ width: 250, p: 2 }}
              role='presentation'
              onClick={toggleDrawer}
            >
              <NavList />
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
