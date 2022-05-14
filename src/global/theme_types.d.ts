type ColorTypes = {
  primary: string;
  success: string;
  danger: string;
  warning: string;
};

type InputTypes = {
  borderWidth: string;
  borderColor: string;
  filledBackground: string;
  addonBg: string;
  addonTextColor: string;
};

export type ThemeTypes = {
  colors: ColorTypes;
  input: InputTypes;
  borderRadius: string;
};
