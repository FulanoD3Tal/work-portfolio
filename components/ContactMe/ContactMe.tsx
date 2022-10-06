import Box from '@mui/material/Box';
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
    <Box
      id='contact-me'
      component='section'
      sx={{ minHeight: '90vh', py: 5, backgroundColor: 'primary.main' }}
    >
      <Box
        sx={{
          p: 4,
          my: 'auto',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Typography
          variant='h3'
          component='h2'
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            textAlign: 'center',
          }}
        >
          {t('contact-me')}
        </Typography>
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
            p: 0,
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
        <Typography sx={{ textAlign: 'center', color: 'text.primary' }}>
          {GMAIL_LINK}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactMe;
