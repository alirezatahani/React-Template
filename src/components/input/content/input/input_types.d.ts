import * as React from 'react';
import { SizeProps } from 'src/global/theme_types';
import { ThemeProps } from 'styled-components';

export type InputContainerProps = {
  hasAddon?: string;
};

export type InputAddonProps = {
  scale: string;
};
export type InputLabelProps = {
  htmlFor: string;
};

export type InputProps = {
  type?: string;
  label?: string;
  placeholder?: string;
  scale?: 'sm' | 'md' | 'lg';
  status?: 'danger' | 'success' | 'warning';
  variant?: 'outlined' | 'filled' | 'standard';
  rounded?: boolean;
  name?: string;
  leftAddon?: string;
  rightAddon?: string;
  onChange?: React.ChangeEventHandler;
  value?: string;
  disabled?: boolean;
};
