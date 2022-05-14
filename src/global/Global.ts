import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const COLORS = {
  primary: '#00b9e0',
  success: '#00ca62',
  danger: '#ff6446',
  warning: '#ffc500',
};

const INPUTS = {
  borderWidth: '1px',
  borderColor: 'rgba(0, 0, 0, 0.16)',
  filledBackground: '#eee',
  addonBg: '#3f444e',
  addonTextColor: '#fff',
};

const theme = {
  colors: COLORS,
  input: INPUTS,
  borderRadius: '6px',
};

export { GlobalStyle, theme };
