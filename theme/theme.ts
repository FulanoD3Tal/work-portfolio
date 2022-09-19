import { createTheme, responsiveFontSizes } from '@mui/material/styles';
/**
 * Global theme of the application
 *
 * use this file to apply styles trough all the app and not repeat
 * yourself
 *
 * @version 1.0.0
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
const defaultTheme = createTheme({
  typography: {
    fontFamily: ['JetBrains Mono', 'monospace'].join(','),
  },
  palette: {
    background: {
      default: '#f4f4f4',
    },
    primary: {
      main: '#1e81b0',
    },
    secondary: {
      main: '#e28743',
      contrastText: '#ffff',
    },
  },
});

const theme = responsiveFontSizes(defaultTheme);

export { theme };
