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
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      default: '#FFC998',
    },
    primary: {
      main: '#48A9A6',
    },
    secondary: {
      main: '#F76F8E',
      contrastText: '#ffff',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#2F2F2F',
    },
  },
});

const theme = responsiveFontSizes(defaultTheme);

export { theme };
