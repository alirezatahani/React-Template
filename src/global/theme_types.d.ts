type ColorTypes = {
  primary: string;
  success: string;
  danger: string;
  warning: string;
  black: string;
  white: string;
};

type InputTypes = {
  borderWidth: string;
  borderColor: string;
  filledBackground: string;
  addonBg: string;
  addonTextColor: string;
};
type ButtonTypes = {
  buttonHeightSm: string;
  buttonHeightMd: string;
  buttonHeightLg: string;
  buttonPaddingSm: string;
  buttonPaddingMd: string;
  buttonPaddingLg: string;
  buttonFontSm: string;
  buttonFontMd: string;
  buttonFontLg: string;
  buttonFocusOutline: string;
  borderColor: string;
  filledBackground: string;
};

export type ThemeTypes = {
  colors: ColorTypes;
  input: InputTypes;
  button: ButtonTypes;
  borderRadius: string;
};
