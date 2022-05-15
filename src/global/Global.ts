import { createGlobalStyle } from 'styled-components';

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
const BUTTON = {
  buttonHeightSm: '1.8rem',
  buttonHeightMd: '2.2rem',
  buttonHeightLg: '2.6rem',
  buttonPaddingSm: '1px 14px',
  buttonPaddingMd: '5px 19px',
  buttonPaddingLg: '6px 29px',
  buttonFontSm: '14px',
  buttonFontMd: '16px',
  buttonFontLg: '17px',
  buttonFocusOutline: '#155ed2',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
};

const theme = {
  colors: COLOR,
  input: INPUT,
  button: BUTTON,
  borderRadius: '6px',
  borderRadiusRound: '50px',
};

export { GlobalStyle, theme };
