import { createGlobalStyle } from 'styled-components';
import { ThemeTypes, ButtonTypes } from './theme_types';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;
const COLOR = {
  primary: '#1562dc',
  success: '#00ca62',
  danger: '#ff6446',
  warning: '#ffc500',
  default: 'transparent',
  black: 'rgba(0, 0, 0, 0.80)',
  white: '#fff',
};

const INPUT = {
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
  addonBg: '#3f444e',
  addonTextColor: '#fff',
};

const BUTTON: ButtonTypes = {
  sm: { height: '1.8rem', padding: '1px 14px', fontSize: '14px' },
  md: { height: '2.2rem', padding: '5px 19px', fontSize: '16px' },
  lg: { height: '2.6rem', padding: '6px 29px', fontSize: '17px' },

  // primary: {
  //   background: `${COLOR.primary}`,
  //   border: `solid 1px ${COLOR.primary}`,
  //   color: `${COLOR.white}`,
  // },
  // warning: {
  //   background: `${COLOR.warning}`,
  //   border: `solid 1px ${COLOR.warning}`,
  //   color: `${COLOR.white}`,
  // },
  // danger: {
  //   background: `${COLOR.danger}`,
  //   border: `solid 1px ${COLOR.danger}`,
  //   color: `${COLOR.white}`,
  // },
  // success: {
  //   background: `${COLOR.success}`,
  //   border: `solid 1px ${COLOR.success}`,
  //   color: `${COLOR.white}`,
  // },
  // default: {
  //   background: `${COLOR.default}`,
  //   border: `solid 1px rgba(0, 0, 0, 0.16)`,
  //   color: `${COLOR.black}`,
  // },

  buttonFocusOutline: '#155ed2',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
};

// const theme: ThemeTypes = {
//   colors: COLOR,
//   input: INPUT,
//   button: BUTTON,
//   borderRadius: '6px',
//   borderRadiusRound: '50px',
// };

const theme = {
  palette: {
    background: { paper: '#fff' },
    common: {
      black: '#323232',
      white: '#FFFFFF',
    },
    primary: {
      main: '#365c65',
      '100': '#C6DDE2',
      '300': '#87ACB6',
      '500': '#568793',
      '700': '#3C636C',
      '800': '#2F4F57',
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
      height: 36,
      padding: 8,
    },
    md: {
      height: 40,
      padding: 10,
    },
    lg: {
      height: 44,
      padding: 12,
    },
  },
  general: {
    borderRadious: 50,
  },
};
export { GlobalStyle, theme };
