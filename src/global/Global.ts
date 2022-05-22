import { createGlobalStyle } from 'styled-components';
import { ThemeTypes, ButtonTypes } from './theme_types';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const INPUT = {
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
  addonBg: '#3f444e',
  addonTextColor: '#fff',
};

const theme = {
  palette: {
    background: { paper: '#fff' },
    common: {
      black: '#323232',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    primary: {
      main: '#1562dc',
    },
    secondary: {
      main: '#434343',
    },
    success: {
      main: '#00ca62',
    },
    danger: {
      main: '#ff6446',
    },
    warning: {
      main: '#ffc500',
    },
    disabled: {
      color: '#0000004d',
      backgroundColor: '#0000002d',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'OpenSans'].join(','),
    body1: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },

    button: {
      color: 'white',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    table: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.1px',
    },
    table2: {
      fontWeight: 900,
      fontStyle: 'normal',
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0.1px',
    },
    overLineCaption: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 11,
      lineHeight: '16px',
      letterSpacing: '0.1px',
    },
    link: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 12,
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    h1: {
      fontWeight: 300,
      fontStyle: 'normal',
      fontSize: 59,
      lineHeight: '80px',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 44,
      lineHeight: '64px',
      letterSpacing: '0px',
    },
    h3: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 33,
      lineHeight: '48px',
      letterSpacing: '0.25px',
    },
    h4: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 25,
      lineHeight: '40px',
      letterSpacing: '0px',
    },
    h5: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: 19,
      lineHeight: '28px',
      letterSpacing: '0.15px',
    },

    subtitle1: {
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.1px',
    },
  },
  sizes: {
    sm: {
      height: 28,
      padding: 8,
    },
    md: {
      height: 34,
      padding: 10,
    },
    lg: {
      height: 40,
      padding: 12,
    },
    small: {
      width: 26,
      height: 26,
    },
    medium: {
      width: 40,
      height: 40,
    },
    large: {
      width: 50,
      height: 50,
    },
  },

  general: {
    borderRadious: 50,
  },
};
export { GlobalStyle, theme };
