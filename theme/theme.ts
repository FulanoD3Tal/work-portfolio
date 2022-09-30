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
    fontFamily: [
      'Poppins',
      'sans-serif',
      'Cabin Sketch',
      'cursive',
      'JetBrains Mono',
      'monospace',
    ].join(','),
  },
  palette: {
    background: {
      default: '#FFC998',
      paper: '#FFC998',
    },
    primary: {
      main: '#48A9A6',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#F76F8E',
      contrastText: '#ffff',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#545454',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1600,
      xl: 1820,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontWeight: 500,
        },
        h2: {
          fontSize: '4.375rem',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          borderRadius: '2rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          borderRadius: '2rem',
          paddingInline: 50,
          paddingBlock: 16,
        },
      },
    },
  },
});

const theme = responsiveFontSizes(defaultTheme);

export { theme };
