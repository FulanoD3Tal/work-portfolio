import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

const Hero = () => {
  const { t } = useTranslation(['common']);

  const desktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Container maxWidth='xl'>
      <Box
        component='section'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: desktop ? 'normal' : 'center',
          minHeight: '80vh',
          gap: 9,
        }}
      >
        <Typography
          variant='h2'
          color='text.secondary'
          sx={{
            fontFamily: 'Cabin Sketch',
            textAlign: desktop ? 'left' : 'center',
          }}
          gutterBottom
        >
          {t('you-have-the-ideas')}
        </Typography>
        <Typography
          variant='h1'
          color='text.primary'
          sx={{
            fontFamily: 'JetBrains Mono',
            fontWeight: 800,
            letterSpacing: -4,
            textAlign: desktop ? 'left' : 'center',
          }}
        >
          {t('i-can-make-them')}{' '}
          <Box
            component='span'
            sx={{
              display: 'block',
              width: 'max-content',
              mx: desktop ? 0 : 'auto',
              // TODO: Typing animation css
              // paddingRight: 1,
              // borderRight: '1rem solid',
            }}
            color='text.primary'
          >
            {t('real')}
          </Box>
        </Typography>
        <Box>
          <Button variant='contained' size='large'>
            {t('contact-me')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
