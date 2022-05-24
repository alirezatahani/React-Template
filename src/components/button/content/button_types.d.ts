import * as React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outlined' | 'text' | 'filled';
  color?: 'primary' | 'secondary' | string;
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  value?: string | number;
  onClick?: () => void;
};
export type StyledButtonProps = {} & ButtonProps;
