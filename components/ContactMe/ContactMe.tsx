import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import BugReportIcon from '@mui/icons-material/BugReport';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

const ContactMe = () => {
  const { t } = useTranslation('common');
  return (
    <Box component='section' sx={{ height: '90vh' }}>
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
          component='ul'
          sx={{
            my: 'auto',
            backgroundColor: 'primary.main',
            boxShadow: (theme) => `0 0 0 100vmax ${theme.palette.primary.main}`,
            clipPath: 'inset(0 -100vmax)',
            p: 4,
            color: 'text.primary',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Link href='/' passHref>
            <IconButton color='inherit'>
              <BugReportIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton color='inherit'>
              <BugReportIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton color='inherit'>
              <BugReportIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton color='inherit'>
              <BugReportIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
