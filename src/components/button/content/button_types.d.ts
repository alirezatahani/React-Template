import * as React from 'react';
import { DefaultTheme, ThemeProps } from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'text' | 'filled';
  color?: 'primary' | 'secondary' | string;
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  theme?: DefaultTheme;
};
export type StyledButtonProps = {} & ButtonProps;
