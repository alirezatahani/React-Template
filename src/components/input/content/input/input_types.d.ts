import React from 'react';
import { SizeElems } from '@global/theme_types';

type ScreenSize = { sm: SizeElems; md: SizeElems; lg: SizeElems };

export type InputAddonProps = {
  scale: keyof ScreenSize;
};
export type InputLabelProps = {
  htmlFor: string;
};
export type InputContainerProps = {
  hasAddon?: string;
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
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  disabled?: boolean;
};
