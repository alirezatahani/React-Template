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

type sizeBtn = {
  height: string;
  padding: string;
  fontSize: string;
};

type btnKindProps = {
  background: string;
  border: string;
  color: string;
};

export type ButtonTypes = {
  sm: sizeBtn;
  md: sizeBtn;
  lg: sizeBtn;
  buttonFocusOutline: string;
  borderColor: string;
  filledBackground: string;
};

export type ThemeTypes = {
  colors: ColorTypes;
  input: InputTypes;
  button: ButtonTypes;
  borderRadius: string;
  borderRadiusRound: string;
};
