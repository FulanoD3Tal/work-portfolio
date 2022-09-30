import Image from 'next/image';
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import { keyframes } from '@emotion/react';

const typewriting = keyframes`
  to{ 
    left: 100%
  }
`;

const blink = keyframes`
  to {
    background: transparent;
  }
`;

const Hero = () => {
  const { t } = useTranslation(['common']);

  const desktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Container maxWidth='xl' sx={{ overflow: 'hidden' }}>
      <Box
        component='section'
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: desktop ? 'normal' : 'center',
          minHeight: '80vh',
          gap: 9,
        }}
      >
        <Box sx={{ zIndex: 1 }}>
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
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: (theme) => theme.palette.background.default,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  animation: `${typewriting} 1s steps(4) 1s forwards`,
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  backgroundColor: (theme) => theme.palette.text.primary,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '.75rem',
                  height: '100%',
                  animation: `${typewriting} 1s steps(4) 1s forwards , ${blink} 1s infinite`,
                },
              }}
              color='text.primary'
            >
              {t('real')}
            </Box>
          </Typography>
        </Box>
        <Box>
          <Button href='#contact-me' variant='contained' size='large'>
            {t('contact-me')}
          </Button>
        </Box>
        <Box
          sx={{
            width: '80%',
            position: { xs: 'static', md: 'absolute' },
            right: '-20%',
            bottom: 0,
          }}
        >
          <Image src='/images/hero_image.svg' width={1060} height={664} />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
