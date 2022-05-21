import 'styled-component';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: PaletteTypes;
    typography: TypographyTypes;
    general: GeneralStyleTypes;
    sizes: SizeProps;
  }
}

type SizeProps = {
  sm: SizeElems;
  md: SizeElems;
  lg: SizeElems;
  [key: string]: any; // change this to what ?
};

type SizeElems = {
  height: number;
  padding: number;
};

type GeneralStyleTypes = {
  borderRadius: number;
  transition: string;
};

type PaletteTypes = {
  background: { paper: string };
  common: { black: string; white: string; transparent: string };
  primary: PaletteColorShadesTypes;
  secondary: { main: string };
  warning: PaletteColorShadesTypes;
  danger: PaletteColorShadesTypes;
  success: PaletteColorShadesTypes;
  greyScale: PaletteColorShadesTypes;
  disabled: {
    color: string;
    backgroundColor: string;
  };
  [key: string]: any; // change this to what  ?
};

type PaletteColorShadesTypes = {
  main: string;
  '200': string;
  '400': string;
  '600': string;
  '800': string;
};

type TypographyTypes = {
  fontFamily: string;
  body1: TypographyElement;
  input: TypographyElement;
  button: TypographyElement;
  overLineCaption: TypographyElement;
  table: TypographyElement;
  table2: TypographyElement;
  link: TypographyElement;
  h1: TypographyElement;
  h2: TypographyElement;
  h3: TypographyElement;
  h4: TypographyElement;
  h5: TypographyElement;
  subtitle1: TypographyElement;
  subtitle2: TypographyElement;
};

type TypographyElement = {
  fontWeight: number | string;
  fontStyle: string;
  fontSize: number;
  lineHeight: string;
  letterSpacing: string;
};
