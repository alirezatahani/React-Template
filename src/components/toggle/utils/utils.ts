import { theme } from '../../../global/Global';

const { primary, secondary, success, warning, danger } = theme.palette;

const colors = {
  primary: primary.main,
  secondary: secondary.main,
  success: success.main,
  warning: warning.main,
  danger: danger.main,
};

export type colorName = keyof typeof colors;

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
};

type SizeName = keyof typeof sizes;

export const getVariantColor = (variant: colorName): string => {
  return colors[variant];
};

export const getSize = (size: SizeName): number => {
  return sizes[size];
};

export const calculateContainerHeight = (size: SizeName): number => {
  return sizes[size] / 2 + calculateIndent(size);
};

export const calculateSliderSize = (size: SizeName): number => {
  return sizes[size] / 2 - calculateIndent(size);
};

export const calculateIndent = (size: SizeName): number => {
  return Math.ceil(sizes[size] * 0.06); // indent => 6% of size
};
