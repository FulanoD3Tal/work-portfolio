import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Features = () => {
  const { t } = useTranslation(['common']);
  return (
    <Container>
      <Grid
        component='section'
        id='my-services'
        container
        sx={{
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            width='100%'
            viewBox='0 0 1111 555'
          >
            <g clipPath='url(#blueprint)'>
              <path
                fill='#48A9A6'
                d='M234.739 0a233.476 233.476 0 0 0-88.069 17.084A234.429 234.429 0 0 0 39 105 234.484 234.484 0 0 0 0 234.776v256.183a10.217 10.217 0 0 0 10.203 10.205l.203.018C207.06 536.9 398.242 555 578.798 555c2.707 0 5.411-.004 8.113-.012 177.482-.54 350.298-18.64 513.649-53.798l.24-.026a10.215 10.215 0 0 0 10.2-10.205V10.205A10.214 10.214 0 0 0 1100.8 0H234.739Z'
              />
              <path
                fill='#3F3D56'
                d='M845.493 204.312a6.746 6.746 0 0 0-6.631 6.742 6.742 6.742 0 0 0 6.631 6.742h169.017c.88.016 1.76-.143 2.59-.468.82-.325 1.57-.81 2.21-1.425a6.662 6.662 0 0 0 1.5-2.165c.35-.812.54-1.687.56-2.573a6.942 6.942 0 0 0-.47-2.59 6.921 6.921 0 0 0-1.43-2.212 6.72 6.72 0 0 0-2.17-1.497 6.74 6.74 0 0 0-2.79-.554H845.493Z'
              />
              <path
                fill='#fff'
                d='M1052.84 202.435c-.13.123-.22.27-.29.431-.07.16-.1.333-.1.507s.03.347.1.508c.07.161.16.307.29.43l5.69 5.696h-14.04c-.35 0-.69.139-.94.388a1.323 1.323 0 0 0 0 1.876c.25.249.59.389.94.389h14.04l-5.69 5.695c-.13.123-.22.27-.29.43-.07.161-.1.334-.1.508s.03.347.1.508c.07.161.16.307.29.43a1.31 1.31 0 0 0 .93.389 1.307 1.307 0 0 0 .94-.389l7.96-7.96a1.321 1.321 0 0 0 0-1.876l-7.96-7.96a1.293 1.293 0 0 0-.43-.287 1.307 1.307 0 0 0-1.01 0c-.16.066-.31.164-.43.287Zm-245.747 0a1.336 1.336 0 0 1 .389.938 1.332 1.332 0 0 1-.389.938l-5.694 5.696h14.041a1.322 1.322 0 0 1 1.331 1.326 1.325 1.325 0 0 1-.822 1.227c-.161.066-.334.1-.509.1h-14.041l5.694 5.695a1.326 1.326 0 1 1-1.876 1.876l-7.958-7.96a1.324 1.324 0 0 1 0-1.876l7.958-7.96a1.328 1.328 0 0 1 1.876 0Z'
              />
              <path
                fill='#fff'
                d='M852.318 64.38a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.245Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.183 0a7.245 7.245 0 1 0 0-14.49 7.245 7.245 0 0 0 0 14.49Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.184 0a7.245 7.245 0 1 0-.002-14.49 7.245 7.245 0 0 0 .002 14.49Zm30.187 0c4 0 7.24-3.244 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245 7.245 7.245 0 1 0 0 14.49Zm30.18 0c4 0 7.24-3.244 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245c-4 0-7.24 3.243-7.24 7.245a7.242 7.242 0 0 0 7.24 7.245ZM852.318 87.323a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.245Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.183 0a7.245 7.245 0 1 0 0-14.49 7.245 7.245 0 0 0 0 14.49Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.184 0a7.245 7.245 0 1 0-.002-14.49 7.245 7.245 0 0 0 .002 14.49Zm30.187 0c4 0 7.24-3.243 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245 7.245 7.245 0 1 0 0 14.49Zm30.18 0c4 0 7.24-3.243 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245c-4 0-7.24 3.244-7.24 7.245a7.242 7.242 0 0 0 7.24 7.245Zm-181.102 22.943a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.245Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.183 0a7.245 7.245 0 1 0 0-14.49 7.245 7.245 0 0 0 0 14.49Zm30.184 0a7.244 7.244 0 0 0 7.244-7.245 7.244 7.244 0 1 0-14.488 0 7.244 7.244 0 0 0 7.244 7.245Zm30.184 0a7.245 7.245 0 1 0-.002-14.49 7.245 7.245 0 0 0 .002 14.49Zm30.187 0c4 0 7.24-3.243 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245 7.245 7.245 0 1 0 0 14.49Zm30.18 0c4 0 7.24-3.243 7.24-7.245a7.242 7.242 0 0 0-7.24-7.245c-4 0-7.24 3.244-7.24 7.245a7.241 7.241 0 0 0 7.24 7.245ZM852.318 133.21a7.245 7.245 0 0 0 7.244-7.246 7.245 7.245 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.246Zm30.184 0a7.245 7.245 0 0 0 7.244-7.246 7.245 7.245 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.246Zm-30.184 22.943a7.245 7.245 0 0 0 7.244-7.245 7.245 7.245 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.245Zm30.184 0a7.245 7.245 0 0 0 7.244-7.245 7.245 7.245 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.245Zm30.183 0a7.245 7.245 0 1 0 0-14.49 7.245 7.245 0 0 0 0 14.49Zm0-22.943a7.246 7.246 0 1 0-.001-14.491 7.246 7.246 0 0 0 .001 14.491Zm30.184 0a7.245 7.245 0 0 0 7.244-7.246 7.245 7.245 0 1 0-14.488 0 7.245 7.245 0 0 0 7.244 7.246Zm30.184 0a7.245 7.245 0 0 0 0-14.491 7.245 7.245 0 0 0-7.244 7.245 7.245 7.245 0 0 0 7.244 7.246Zm30.187 0c4 0 7.24-3.244 7.24-7.246a7.242 7.242 0 0 0-7.24-7.245 7.245 7.245 0 1 0 0 14.491Zm30.18 0c4 0 7.24-3.244 7.24-7.246a7.242 7.242 0 0 0-7.24-7.245c-4 0-7.24 3.244-7.24 7.245a7.242 7.242 0 0 0 7.24 7.246Z'
                opacity='.4'
              />
              <path
                fill='#3F3D56'
                d='M748.403 425.716a39.98 39.98 0 0 1-22.216-6.74 39.998 39.998 0 0 1-6.06-61.534 39.99 39.99 0 0 1 43.578-8.669 39.988 39.988 0 0 1 24.685 36.949 40.044 40.044 0 0 1-11.725 28.267 40.03 40.03 0 0 1-28.262 11.727Zm0-77.72a37.717 37.717 0 0 0-34.849 23.289 37.735 37.735 0 0 0 8.177 41.114 37.716 37.716 0 0 0 64.392-26.677 37.77 37.77 0 0 0-37.72-37.726Z'
              />
              <path
                fill='#fff'
                d='M763.734 381.889h-11.498v-11.5a3.834 3.834 0 1 0-7.666 0v11.5h-11.498a3.833 3.833 0 0 0 0 7.667h11.498v11.499a3.834 3.834 0 1 0 7.666 0v-11.499h11.498a3.833 3.833 0 0 0 0-7.667Z'
              />
              <path
                fill='#fff'
                d='M61.245 430.626a5.697 5.697 0 1 0-.002-11.393 5.697 5.697 0 0 0 .002 11.393Zm0-23.735a5.697 5.697 0 1 0-.002-11.393 5.697 5.697 0 0 0 .002 11.393Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.734a5.697 5.697 0 1 0-.002-11.393 5.697 5.697 0 0 0 .002 11.393Zm18.036 142.409a5.696 5.696 0 1 0-.002-11.393 5.696 5.696 0 0 0 .002 11.393Zm0-23.735a5.696 5.696 0 1 0-.002-11.393 5.696 5.696 0 0 0 .002 11.393Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0 0-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.734a5.696 5.696 0 1 0-.002-11.393 5.696 5.696 0 0 0 .002 11.393Zm18.036 142.409a5.696 5.696 0 1 0-.002-11.393 5.696 5.696 0 0 0 .002 11.393Zm0-23.735a5.696 5.696 0 1 0-.002-11.393 5.696 5.696 0 0 0 .002 11.393Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 0 11.391Zm0-23.734a5.696 5.696 0 1 0-.003-11.393 5.696 5.696 0 0 0 .003 11.393Zm18.036 142.409a5.696 5.696 0 1 0-.003-11.393 5.696 5.696 0 0 0 .003 11.393Zm0-23.735a5.696 5.696 0 1 0-.003-11.393 5.696 5.696 0 0 0 .003 11.393Zm18.035 23.735a5.697 5.697 0 1 0-.001-11.393 5.697 5.697 0 0 0 .001 11.393Zm0-23.735a5.697 5.697 0 1 0-.001-11.393 5.697 5.697 0 0 0 .001 11.393Zm0-23.735a5.696 5.696 0 1 0 0-11.392 5.696 5.696 0 0 0 0 11.392Zm-18.035 0a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 .001 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 .001 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 .001 11.391Zm0-23.735a5.696 5.696 0 1 0-.001-11.391 5.696 5.696 0 0 0 .001 11.391Zm0-23.734a5.696 5.696 0 1 0-.003-11.393 5.696 5.696 0 0 0 .003 11.393Z'
                opacity='.4'
              />
              <path
                fill='#3F3D56'
                d='M563.899 37.42H185.544a7.016 7.016 0 0 0-7.009 7.01v323.583a7.02 7.02 0 0 0 7.009 7.01h378.355a7.017 7.017 0 0 0 7.008-7.01V44.43a7.013 7.013 0 0 0-7.008-7.01Zm4.2 330.593a4.217 4.217 0 0 1-4.2 4.214H185.544a4.205 4.205 0 0 1-4.2-4.214V44.43a4.206 4.206 0 0 1 4.2-4.214h378.355a4.214 4.214 0 0 1 4.2 4.214v323.583Z'
              />
              <path
                fill='#fff'
                d='M272.878 317.487a28.547 28.547 0 0 1-28.54 28.538 28.539 28.539 0 0 1-28.541-28.538 28.549 28.549 0 0 1 17.615-26.389 28.542 28.542 0 0 1 37.299 15.459 28.567 28.567 0 0 1 2.167 10.93Z'
              />
              <path
                fill='#3F3D56'
                d='M534.499 298.452H310.245a4.76 4.76 0 0 0 0 9.518h224.254a4.758 4.758 0 0 0 3.359-8.121 4.758 4.758 0 0 0-3.359-1.397Z'
              />
              <path
                fill='#fff'
                d='M406.74 327.004h-96.495a4.749 4.749 0 0 0-4.751 4.752 4.752 4.752 0 0 0 4.751 4.752h96.495a4.753 4.753 0 0 0 0-9.504Zm247.047-62.157H275.435a9.705 9.705 0 0 1-9.692-9.694V89.086a9.706 9.706 0 0 1 9.692-9.693h378.352a9.702 9.702 0 0 1 9.692 9.693v166.067a9.705 9.705 0 0 1-9.692 9.694ZM275.435 82.794a6.297 6.297 0 0 0-6.291 6.292v166.067a6.299 6.299 0 0 0 6.291 6.293h378.352a6.302 6.302 0 0 0 6.291-6.293V89.086a6.301 6.301 0 0 0-6.291-6.292H275.435Z'
              />
              <path
                fill='#fff'
                d='M352.487 139.962a4.758 4.758 0 0 0 0 9.516h224.248a4.758 4.758 0 0 0 0-9.516H352.487Zm0 27.567a4.758 4.758 0 0 0 0 9.516h224.249a4.755 4.755 0 0 0 4.749-4.758 4.756 4.756 0 0 0-4.749-4.758H352.487Zm0 27.233a4.757 4.757 0 1 0 0 9.515h96.495a4.754 4.754 0 0 0 4.749-4.757 4.756 4.756 0 0 0-4.749-4.758h-96.495Zm363.681 140.443-38-53.64 12.301 2.564a1.687 1.687 0 0 0 1.28-.243 1.692 1.692 0 0 0 .733-1.076 1.697 1.697 0 0 0-1.319-2.014l-18.332-3.817-2.474 18.562a1.692 1.692 0 0 0 .832 1.702 1.708 1.708 0 0 0 1.89-.122 1.701 1.701 0 0 0 .652-1.13l1.658-12.465 38.005 53.645a1.693 1.693 0 0 0 1.765.675 1.692 1.692 0 0 0 1.061-.752 1.692 1.692 0 0 0 .219-1.283 1.708 1.708 0 0 0-.271-.606Z'
              />
              <path
                fill='#3F3D56'
                d='M509.774 491.323H239.669a5.01 5.01 0 0 1-5.002-5.003v-67.012a5.009 5.009 0 0 1 5.002-5.003h270.105a5.007 5.007 0 0 1 5.002 5.003v67.012a5.01 5.01 0 0 1-5.002 5.003Zm-270.105-75.017a3.005 3.005 0 0 0-3.002 3.002v67.012a3.01 3.01 0 0 0 .88 2.122 3.01 3.01 0 0 0 2.122.88h270.105a3.006 3.006 0 0 0 3.001-3.002v-67.012a3.001 3.001 0 0 0-3.001-3.002H239.669Z'
              />
              <path
                fill='#fff'
                d='M281.638 470.621c11.252 0 20.375-9.124 20.375-20.378 0-11.255-9.123-20.379-20.375-20.379-11.253 0-20.376 9.124-20.376 20.379 0 11.254 9.123 20.378 20.376 20.378Zm47.057-33.964a3.404 3.404 0 0 0-2.406.992 3.406 3.406 0 0 0-.737 3.706 3.391 3.391 0 0 0 3.143 2.095h160.091a3.397 3.397 0 0 0 0-6.793H328.695Zm0 20.378a3.391 3.391 0 0 0-3.402 3.397 3.4 3.4 0 0 0 2.1 3.139c.413.171.855.258 1.302.257h68.888a3.396 3.396 0 0 0 0-6.793h-68.888Z'
              />
              <path
                fill='#3F3D56'
                d='M866.154 252.573h120.048a5.005 5.005 0 0 1 5.002 5.003V382.62a5.011 5.011 0 0 1-5.002 5.003H866.154a5.009 5.009 0 0 1-5.002-5.003V257.576a5.01 5.01 0 0 1 5.002-5.003Zm120.048 133.049a3.01 3.01 0 0 0 2.121-.88 3.01 3.01 0 0 0 .88-2.122V257.576a3.005 3.005 0 0 0-3.001-3.002H866.154a3.005 3.005 0 0 0-3.001 3.002V382.62a3.01 3.01 0 0 0 .88 2.122 3.01 3.01 0 0 0 2.121.88h120.048Z'
              />
              <path
                fill='#fff'
                d='M960.622 361.836a3.398 3.398 0 0 0 3.396-3.396 3.397 3.397 0 0 0-3.396-3.397h-68.888a3.395 3.395 0 0 0-3.396 3.397 3.397 3.397 0 0 0 3.396 3.396h68.888Zm0-20.011a3.394 3.394 0 0 0 2.405-5.8 3.413 3.413 0 0 0-2.405-.993h-68.888a3.413 3.413 0 0 0-3.143 2.096 3.393 3.393 0 0 0 .738 3.705 3.394 3.394 0 0 0 2.405.992h68.888Zm-34.444-63.466a21.374 21.374 0 0 1 19.748 13.198 21.378 21.378 0 0 1-27.928 27.933 21.375 21.375 0 0 1-13.196-19.752 21.4 21.4 0 0 1 21.376-21.379Z'
              />
            </g>
            <defs>
              <clipPath id='blueprint'>
                <path fill='#fff' d='M0 0h1111v555H0z' />
              </clipPath>
            </defs>
          </svg>
        </Grid>
        <Grid item xs={12} md sx={{ my: 'auto', p: 10 }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: 42,
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('from-an-idea')}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: 24,
              fontWeight: 'medium',
              color: 'text.secondary',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('design-and-prototype')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        component='section'
        container
        sx={{
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            fill='none'
            viewBox='0 0 1095 629'
          >
            <g clipPath='url(#devices)'>
              <path
                fill='#F2F2F2'
                d='M237.256 558.335c31.451 0 56.946-25.489 56.946-56.932 0-31.442-25.495-56.931-56.946-56.931-31.45 0-56.946 25.489-56.946 56.931 0 31.443 25.496 56.932 56.946 56.932Z'
              />
              <path
                fill='#48A9A6'
                d='M246.516 550.003c31.45 0 56.946-25.489 56.946-56.931 0-31.443-25.496-56.932-56.946-56.932-31.451 0-56.946 25.489-56.946 56.932 0 31.442 25.495 56.931 56.946 56.931Z'
              />
              <path
                fill='#3F3D56'
                d='M996.955 430.078H292.377V432h704.578v-1.922ZM657.279 17.924H407.197v-5.153H293.801v5.153H42.688a16.92 16.92 0 0 0-15.628 10.44 16.908 16.908 0 0 0-1.288 6.472v342.35a16.91 16.91 0 0 0 16.916 16.911H657.28a16.915 16.915 0 0 0 16.916-16.911V34.836a16.907 16.907 0 0 0-10.442-15.624 16.926 16.926 0 0 0-6.474-1.288Z'
              />
              <path
                fill='#48A9A6'
                d='M651.516 47.812H48.451v340.102h603.065V47.812Zm-302.048-9.276a6.184 6.184 0 1 0 0-12.367 6.184 6.184 0 1 0 0 12.367Z'
              />
              <path
                fill='#000'
                d='M479.05 387.914H48.451V47.812L479.05 387.914Z'
                opacity='.1'
              />
              <path
                fill='#F2F2F2'
                d='M142.813 362.464c32.015 0 57.968-25.947 57.968-57.954 0-32.006-25.953-57.953-57.968-57.953s-57.968 25.947-57.968 57.953c0 32.007 25.953 57.954 57.968 57.954Z'
              />
              <path
                fill='#3F3D56'
                d='M546.512 231.232H490.18V243h56.332v-11.768Zm68.104-91.623h-192.54v5.044h192.54v-5.044Zm0 15.971h-192.54v5.044h192.54v-5.044Zm0 15.971h-192.54v5.044h192.54v-5.044Zm0 15.971h-192.54v5.043h192.54v-5.043Zm0 15.971h-192.54v5.043h192.54v-5.043Z'
              />
              <path
                fill='#F2F2F2'
                d='M614.616 54.712h-23.542v23.536h23.542V54.712Z'
              />
              <path
                fill='#3F3D56'
                d='M625.546 89.175H596.96v-28.58h28.586v28.58Zm-27.343-1.242h26.101V61.839h-26.101v26.094Zm92.925 293.797h-58.855v-4.239a.845.845 0 0 0-.519-.777.848.848 0 0 0-.322-.064h-20.179a.848.848 0 0 0-.594.246.825.825 0 0 0-.247.595v4.239H597.8v-4.239a.837.837 0 0 0-.84-.841h-20.179a.845.845 0 0 0-.777.519.845.845 0 0 0-.064.322v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.845.845 0 0 0-.322-.064h-20.179a.843.843 0 0 0-.84.841v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.848.848 0 0 0-.322-.064h-20.179a.848.848 0 0 0-.594.246.84.84 0 0 0-.247.595v4.239h-12.612v-4.239a.844.844 0 0 0-.246-.595.837.837 0 0 0-.594-.246h-20.179a.845.845 0 0 0-.777.519.845.845 0 0 0-.064.322v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.845.845 0 0 0-.322-.064h-20.179a.843.843 0 0 0-.84.841v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.848.848 0 0 0-.322-.064H266.53a.845.845 0 0 0-.777.519.845.845 0 0 0-.064.322v4.239h-12.612v-4.239a.837.837 0 0 0-.841-.841h-20.178a.845.845 0 0 0-.777.519.826.826 0 0 0-.064.322v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.845.845 0 0 0-.322-.064h-20.179a.848.848 0 0 0-.594.246.845.845 0 0 0-.247.595v4.239h-12.611v-4.239a.845.845 0 0 0-.519-.777.848.848 0 0 0-.322-.064h-20.179a.845.845 0 0 0-.777.519.845.845 0 0 0-.064.322v4.239H149.66v-4.239a.837.837 0 0 0-.84-.841h-20.179a.845.845 0 0 0-.777.519.845.845 0 0 0-.064.322v4.239h-12.612v-4.239a.845.845 0 0 0-.519-.777.845.845 0 0 0-.322-.064H94.168a.846.846 0 0 0-.777.519.839.839 0 0 0-.064.322v4.239H80.716v-4.239a.84.84 0 0 0-.841-.841H59.696a.845.845 0 0 0-.777.519.839.839 0 0 0-.064.322v4.239H20.18a20.183 20.183 0 0 0-14.269 5.909A20.17 20.17 0 0 0 0 401.904v9.122a20.173 20.173 0 0 0 20.179 20.173h670.949a20.174 20.174 0 0 0 20.179-20.173v-9.122a20.17 20.17 0 0 0-5.91-14.265 20.185 20.185 0 0 0-14.269-5.909Zm-534.284-41.023a73.069 73.069 0 0 1-40.586-12.308 73.043 73.043 0 0 1-26.906-32.777 73.016 73.016 0 0 1 15.836-79.592 73.063 73.063 0 0 1 112.398 11.068 73.019 73.019 0 0 1 12.312 40.575 73.11 73.11 0 0 1-21.421 51.619 73.146 73.146 0 0 1-51.633 21.415Zm0-144.146a71.146 71.146 0 0 0-39.518 11.985 71.114 71.114 0 0 0-26.198 31.914 71.095 71.095 0 0 0 15.419 77.497 71.143 71.143 0 0 0 109.44-10.776 71.098 71.098 0 0 0 11.988-39.508 71.18 71.18 0 0 0-20.857-50.26 71.218 71.218 0 0 0-50.274-20.852ZM808.555 31.273H563.443v1.922h245.112v-1.922ZM1095 538.668H390.422v1.922H1095v-1.922Zm-664.687 88.41H185.201V629h245.112v-1.922Z'
              />
              <path
                fill='#48A9A6'
                d='M479.651 528.537h-26.914v26.907h26.914v-26.907Z'
              />
              <path
                fill='#3F3D56'
                d='M495.992 540.068h-32.681v-32.673h32.681v32.673Zm-31.26-1.42h29.839v-29.832h-29.839v29.832Z'
              />
              <path
                fill='#48A9A6'
                d='M792.05 21.142h-26.915v26.907h26.915V21.142Z'
              />
              <path
                fill='#3F3D56'
                d='M808.391 32.673h-32.682V0h32.682v32.673Zm-31.261-1.42h29.84V1.42h-29.84v29.832Z'
              />
              <path
                fill='#48A9A6'
                d='M1063.12 528.537h-26.92v26.907h26.92v-26.907Z'
              />
              <path
                fill='#3F3D56'
                d='M1079.46 540.068h-32.69v-32.673h32.69v32.673Zm-31.26-1.42h29.84v-29.832h-29.84v29.832Zm-32.02-315.742h-2.29v-62.619c0-4.759-.93-9.472-2.76-13.869a36.297 36.297 0 0 0-7.85-11.758 36.265 36.265 0 0 0-25.638-10.615h-132.7a36.265 36.265 0 0 0-25.634 10.615 36.24 36.24 0 0 0-10.618 25.627v343.531a36.236 36.236 0 0 0 10.618 25.627 36.245 36.245 0 0 0 25.634 10.615h132.7a36.264 36.264 0 0 0 25.638-10.615 36.282 36.282 0 0 0 7.85-11.757 36.086 36.086 0 0 0 2.76-13.87V267.479h2.29v-44.573Z'
              />
              <path
                fill='#48A9A6'
                d='M1006.17 162.417v343.03c0 7.179-2.85 14.063-7.923 19.14a27.072 27.072 0 0 1-19.142 7.931H845.764a27.076 27.076 0 0 1-19.142-7.931 27.064 27.064 0 0 1-7.926-19.14v-343.03a27.063 27.063 0 0 1 7.929-19.134 27.08 27.08 0 0 1 19.139-7.927h16.178a12.853 12.853 0 0 0 1.236 12.027 12.865 12.865 0 0 0 10.673 5.684h76.024a12.852 12.852 0 0 0 10.673-5.684 12.85 12.85 0 0 0 1.236-12.027h17.322a27.06 27.06 0 0 1 27.064 27.061Z'
              />
              <path
                fill='#3F3D56'
                d='M932.296 361.536h-39.722v11.768h39.722v-11.768Zm48.021-91.622H844.553v5.043h135.764v-5.043Zm0 15.971H844.553v5.043h135.764v-5.043Zm0 15.971H844.553v5.043h135.764v-5.043Zm0 15.97H844.553v5.044h135.764v-5.044Zm0 15.971H844.553v5.044h135.764v-5.044Z'
              />
              <path
                fill='#F2F2F2'
                d='M917.177 202.938h-23.542v23.536h23.542v-23.536Z'
              />
              <path
                fill='#3F3D56'
                d='M902.648 208.823v28.58h28.587v-28.58h-28.587Zm27.347 27.34h-26.107v-26.1h26.107v26.1Z'
              />
              <path
                fill='#000'
                d='M1006.17 468.815v36.632c0 7.179-2.85 14.064-7.923 19.14a27.072 27.072 0 0 1-19.142 7.931H845.764a27.076 27.076 0 0 1-19.142-7.931 27.062 27.062 0 0 1-7.926-19.14V320.738l112.339 88.727 1.922 1.518 20.897 16.5 1.951 1.548 50.365 39.784Z'
                opacity='.1'
              />
              <path
                fill='#F2F2F2'
                d='M900.9 521.401c23.288 0 42.167-18.874 42.167-42.156s-18.879-42.156-42.167-42.156-42.167 18.874-42.167 42.156 18.879 42.156 42.167 42.156Z'
              />
              <path
                fill='#3F3D56'
                d='M307.757 629a83.642 83.642 0 0 1-46.461-14.09 83.604 83.604 0 0 1-35.559-85.825 83.593 83.593 0 0 1 22.887-42.807 83.627 83.627 0 0 1 42.818-22.881 83.651 83.651 0 0 1 48.317 4.757 83.623 83.623 0 0 1 37.531 30.793 83.59 83.59 0 0 1 14.093 46.448 83.685 83.685 0 0 1-24.521 59.09A83.731 83.731 0 0 1 307.757 629Zm0-165.288a81.726 81.726 0 0 0-45.393 13.766 81.694 81.694 0 0 0-30.092 36.658 81.676 81.676 0 0 0 17.711 89.018 81.72 81.72 0 0 0 125.708-12.378 81.667 81.667 0 0 0 13.77-45.381 81.767 81.767 0 0 0-23.958-57.731 81.805 81.805 0 0 0-57.746-23.952Zm605.572 48.049a52.859 52.859 0 0 1-48.843-32.627 52.837 52.837 0 0 1 11.46-57.6 52.877 52.877 0 0 1 81.341 8.009 52.846 52.846 0 0 1 8.909 29.364 52.907 52.907 0 0 1-15.502 37.356 52.933 52.933 0 0 1-37.365 15.498Zm0-103.785a50.942 50.942 0 0 0-47.067 31.441 50.916 50.916 0 0 0-2.899 29.427 50.938 50.938 0 0 0 40.027 40.016 50.951 50.951 0 0 0 52.298-21.656 50.924 50.924 0 0 0 8.586-28.297 50.984 50.984 0 0 0-14.938-35.997 51.01 51.01 0 0 0-36.007-14.934Z'
              />
            </g>
            <defs>
              <clipPath id='devices'>
                <path fill='#fff' d='M0 0h1095v629H0z' />
              </clipPath>
            </defs>
          </svg>
        </Grid>
        <Grid item xs={12} md sx={{ my: 'auto', p: 10 }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: 42,
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('to-reality')}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: 24,
              fontWeight: 'medium',
              color: 'text.secondary',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('fullstack-development')}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        component='section'
        container
        sx={{
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='80%'
            fill='none'
            viewBox='0 0 1046 837'
          >
            <g clipPath='url(#server)'>
              <path
                fill='#CCC'
                d='M524.102 712.181a306.398 306.398 0 0 1-194.337-69.512A306.215 306.215 0 0 1 223.653 465.69a306.135 306.135 0 0 1 30.286-204.101 306.295 306.295 0 0 1 152.935-138.565A306.426 306.426 0 0 1 613.028 112.9a306.32 306.32 0 0 1 165.784 122.913 306.153 306.153 0 0 1-38.097 386.674 304.33 304.33 0 0 1-99.319 66.537 304.42 304.42 0 0 1-117.294 23.157Zm0-610.114c-167.615 0-303.981 136.32-303.981 303.88s136.366 303.879 303.981 303.879c167.616 0 303.981-136.319 303.981-303.879 0-167.56-136.365-303.88-303.981-303.88Z'
              />
              <path
                fill='#2F2E41'
                d='M637.848 758.106V449.592H408.152v308.514h229.696Z'
              />
              <path
                fill='#3F3D56'
                d='M677.309 440.171H368.691v122.464h308.618V440.171Zm0 136.594H368.691v122.464h308.618V576.765Zm0 136.594H368.691v122.464h308.618V713.359Z'
              />
              <path
                fill='#48A9A6'
                d='M677.309 492.096H368.691v18.841h308.618v-18.841Zm0 136.594H368.691v18.841h308.618V628.69Zm0 136.594H368.691v18.841h308.618v-18.841Zm-60.075-300.385a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.737 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.736 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm-49.473 134.239a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.737 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.736 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm-49.473 134.239a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.737 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Zm24.736 0a7.066 7.066 0 1 0 0-14.13 7.066 7.066 0 1 0 0 14.13Z'
              />
              <path fill='#3F3D56' d='M1046 834.645H0V837h1046v-2.355Z' />
              <path
                fill='#E6E6E6'
                d='M284.916 319.188V538.2a17.278 17.278 0 0 1-5.063 12.216 17.294 17.294 0 0 1-12.22 5.061h-85.139a17.287 17.287 0 0 1-17.29-17.277V319.188a17.287 17.287 0 0 1 17.29-17.277h10.328a8.218 8.218 0 0 0 7.604 11.312h48.54a8.218 8.218 0 0 0 7.604-11.312h11.063a17.29 17.29 0 0 1 12.22 5.061 17.278 17.278 0 0 1 5.063 12.216Z'
              />
              <path
                fill='#fff'
                d='M279.244 343.734H170.875v150.725h108.369V343.734Z'
              />
              <path
                fill='#E6E6E6'
                d='M244.898 447.377h-43.254v2.471h43.254v-2.471Z'
              />
              <path
                fill='#48A9A6'
                d='M268.527 456.45h-66.926v2.47h66.926v-2.47Z'
              />
              <path
                fill='#E6E6E6'
                d='M254.123 464.997h-52.522v2.471h52.522v-2.471Zm-21.627 8.547h-30.895v2.471h30.895v-2.471Zm15.448 8.547h-46.343v2.471h46.343v-2.471Zm-60.972-35.424h-4.943v4.942h4.943v-4.942Z'
              />
              <path
                fill='#48A9A6'
                d='M186.972 455.214h-4.943v4.942h4.943v-4.942Z'
              />
              <path
                fill='#E6E6E6'
                d='M186.972 463.761h-4.943v4.942h4.943v-4.942Zm0 8.548h-4.943v4.941h4.943v-4.941Zm0 8.547h-4.943v4.941h4.943v-4.941Zm60.096-118.281h-43.58v43.566h43.58v-43.566ZM667.879.164H378.245v185.432h289.634V.164Z'
              />
              <path
                fill='#fff'
                d='M640.213 52.041H400.079v90.712h240.134V52.042Z'
              />
              <path
                fill='#E6E6E6'
                d='M501.463 67.757h-57.632v3.293h57.632v-3.293Z'
              />
              <path
                fill='#48A9A6'
                d='M532.948 79.846h-89.175v3.292h89.175v-3.293Z'
              />
              <path
                fill='#E6E6E6'
                d='M513.755 91.234h-69.982v3.292h69.982v-3.292Zm-28.816 11.389h-41.166v3.292h41.166v-3.292Zm20.583 11.389h-61.749v3.292h61.749v-3.292ZM424.281 66.81h-6.586v6.585h6.586v-6.584Z'
              />
              <path
                fill='#48A9A6'
                d='M424.281 78.2h-6.586v6.584h6.586v-6.585Z'
              />
              <path
                fill='#E6E6E6'
                d='M424.281 89.588h-6.586v6.584h6.586v-6.584Zm0 11.389h-6.586v6.584h6.586v-6.584Zm0 11.388h-6.586v6.585h6.586v-6.585Zm204.148-48.958h-58.966v58.946h58.966V63.407Z'
              />
              <path fill='#48A9A6' d='M667.755 0H378.121v12.3h289.634V0Z' />
              <path
                fill='#fff'
                d='M387.265 8.758a2.47 2.47 0 1 0 0-4.94 2.47 2.47 0 0 0 0 4.94Zm8.657 0a2.47 2.47 0 1 0 0-4.94 2.47 2.47 0 0 0 0 4.94Zm8.656 0a2.47 2.47 0 1 0 0-4.94 2.47 2.47 0 0 0 0 4.94Z'
              />
              <path
                fill='#E6E6E6'
                d='M861.828 347.146h-70.675v36.504h70.675v-36.504Zm0 130.706h-70.675v36.504h70.675v-36.504Z'
              />
              <path
                fill='#E6E6E6'
                d='M826.49 489.628c32.528 0 58.897-26.36 58.897-58.877s-26.369-58.877-58.897-58.877c-32.527 0-58.896 26.36-58.896 58.877s26.369 58.877 58.896 58.877Z'
              />
              <path
                fill='#fff'
                d='M826.49 476.675c25.372 0 45.94-20.561 45.94-45.924s-20.568-45.924-45.94-45.924c-25.371 0-45.939 20.561-45.939 45.924s20.568 45.924 45.939 45.924Z'
              />
              <path
                fill='#E2E2E2'
                d='M847.076 418.168h-35.629v2.035h35.629v-2.035Z'
              />
              <path
                fill='#48A9A6'
                d='M866.54 425.641h-55.129v2.035h55.129v-2.035Z'
              />
              <path
                fill='#E2E2E2'
                d='M854.675 432.682h-43.264v2.035h43.264v-2.035Zm-17.815 7.04h-25.449v2.035h25.449v-2.035Zm12.725 7.041h-38.174v2.035h38.174v-2.035Zm-50.224-29.18h-4.072v4.07h4.072v-4.07Z'
              />
              <path
                fill='#48A9A6'
                d='M799.361 424.623h-4.072v4.071h4.072v-4.071Z'
              />
              <path
                fill='#E2E2E2'
                d='M799.361 431.664h-4.072v4.07h4.072v-4.07Zm0 7.041h-4.072v4.07h4.072v-4.07Zm0 7.04h-4.072v4.071h4.072v-4.071Z'
              />
            </g>
            <defs>
              <clipPath id='server'>
                <path fill='#fff' d='M0 0h1046v837H0z' />
              </clipPath>
            </defs>
          </svg>
        </Grid>
        <Grid item xs={12} md sx={{ my: 'auto', p: 10 }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: 42,
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('for-ever')}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              fontSize: 24,
              fontWeight: 'medium',
              color: 'text.secondary',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {t('hosting-and-server-funcionalities')}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
