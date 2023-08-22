import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'Noto Sans',
      fontSize: '56px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: '64px',
      letterSpacing: '-0.5px',
    },
    subtitle2: {
      fontFamily: 'Noto Sans',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle3: {
      fontFamily: 'Noto Sans',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    body3: {
      fontFamily: 'Noto Sans',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
          backgroundColor: '#F9F9FA',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: 'none',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Noto Sans',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0.25px',
          paddingLeft: '16px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '48px',
          padding: '4px 16px',
        },
        input: {
          padding: 0,
          fontFamily: 'Noto Sans',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0.25px',
          ':-webkit-autofill': {
              transition: 'background-color 5000s ease-in-out 0s', 
              boxShadow: '0 0 0px 1000px transparent', 
          }
        }
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& > .MuiInputLabel-root': {
            position: 'unset',
            transform: 'unset',
          },
          '& fieldset': {
            top: 0,
          },
          '& label + div fieldset': {
            top: -5,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 'unset',
          ':hover': {
            backgroundColor: 'rgba(77, 77, 77, 0.08)',
            borderRadius: '4px'
          },
        },
        contained: {
          backgroundColor: '#BAA182',
          ':hover': {
            backgroundColor: '#BAA182',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1C1B1F',
      light: '#4D4D4D',
    },
    secondary: {
      main: '#19857b',
      light: '#2A2118',
    },
    error: {
      main: '#ff0000',
      light: '#BA1A1A',
    },
    background: {
      default: '#e0e0e0',
    },
  },
});

export default theme;
