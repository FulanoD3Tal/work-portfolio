import React from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from '@mui/material/styles';
//Mock Service Worker setup
import { addDecorator } from '@storybook/react';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { handlers } from '../mocks/handlers';
//i18n setup
import i18n from './i18next.js';

initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
  //apply request's mock to all stories
  msw: [...handlers],
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    es: 'Español',
  },
  backgrounds: {
    default: 'lighter',
    values: [
      {
        name: 'lighter',
        value: theme.palette.background.default,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
