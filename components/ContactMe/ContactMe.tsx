import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Link from '@mui/material/Link';
import LinkedInIcon from '../SvgIcons/LinkedInIcon';
import TwitterIcon from '../SvgIcons/TwitterIcon';
import GithubIcon from '../SvgIcons/GithubIcon';
import {
  GITHUB_LINK,
  GMAIL_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from '../../config/env';

const ContactMe = () => {
  const { t } = useTranslation('common');

  return (
    <Box id='contact-me' component='section' sx={{ height: '90vh', py: 5 }}>
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
            <Link
              href={LINKEDIN_LINK}
              target='_blank'
              sx={{ color: 'text.primary' }}
            >
              <LinkedInIcon sx={{ fontSize: 60 }} />
            </Link>
            <Link
              href={TWITTER_LINK}
              target='_blank'
              sx={{ color: 'text.primary' }}
            >
              <TwitterIcon sx={{ fontSize: 60 }} />
            </Link>
            <Link
              href={GITHUB_LINK}
              target='_blank'
              sx={{ color: 'text.primary' }}
            >
              <GithubIcon sx={{ fontSize: 60 }} />
            </Link>
          </Box>
          <Typography
            variant='h6'
            sx={{ textAlign: 'center', color: 'text.primary' }}
          >
            {GMAIL_LINK}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
