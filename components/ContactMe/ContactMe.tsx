import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '../SvgIcons/LinkedInIcon';
import TwitterIcon from '../SvgIcons/TwitterIcon';
import GithubIcon from '../SvgIcons/GithubIcon';

const ContactMe = () => {
  const { t } = useTranslation('common');
  return (
    <Box component='section' sx={{ height: '90vh', py: 5 }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          gap: 5,
        }}
      >
        <Typography
          variant='h2'
          sx={{ fontWeight: 700, color: 'text.primary', textAlign: 'center' }}
        >
          {t('contact-me')}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            boxShadow: (theme) => `0 0 0 100vmax ${theme.palette.primary.main}`,
            clipPath: 'inset(0 -100vmax)',
            p: 4,
            my: 'auto',
          }}
        >
          <Box
            component='ul'
            sx={{
              color: 'text.primary',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              my: 5,
            }}
          >
            <Link href='/' passHref>
              <IconButton sx={{ p: 2, borderRadius: '1rem' }} color='inherit'>
                <LinkedInIcon sx={{ fontSize: 60 }} />
              </IconButton>
            </Link>
            <Link href='/' passHref>
              <IconButton sx={{ p: 2, borderRadius: '1rem' }} color='inherit'>
                <TwitterIcon sx={{ fontSize: 60 }} />
              </IconButton>
            </Link>
            <Link href='/' passHref>
              <IconButton sx={{ p: 2, borderRadius: '1rem' }} color='inherit'>
                <GithubIcon sx={{ fontSize: 60 }} />
              </IconButton>
            </Link>
          </Box>
          <Typography
            variant='h6'
            sx={{ textAlign: 'center', color: 'text.primary' }}
          >
            su.escala.es.biblica@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
