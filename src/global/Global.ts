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

  primary: {
    background: `${COLOR.primary}`,
    border: `solid 1px ${COLOR.primary}`,
    color: `${COLOR.white}`,
  },
  warning: {
    background: `${COLOR.warning}`,
    border: `solid 1px ${COLOR.warning}`,
    color: `${COLOR.white}`,
  },
  danger: {
    background: `${COLOR.danger}`,
    border: `solid 1px ${COLOR.danger}`,
    color: `${COLOR.white}`,
  },
  success: {
    background: `${COLOR.success}`,
    border: `solid 1px ${COLOR.success}`,
    color: `${COLOR.white}`,
  },
  default: {
    background: `${COLOR.default}`,
    border: `solid 1px rgba(0, 0, 0, 0.16)`,
    color: `${COLOR.black}`,
  },

  buttonFocusOutline: '#155ed2',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
};

const theme: ThemeTypes = {
  colors: COLOR,
  input: INPUT,
  button: BUTTON,
  borderRadius: '6px',
  borderRadiusRound: '50px',
};

export { GlobalStyle, theme };
