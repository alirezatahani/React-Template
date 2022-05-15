import * as React from 'react';

export type InputContainerProps = {
  hasAddon?: string;
};

export type InputAddonProps = {
  size: string;
};
export type InputProps = {
  type?: string;
  placeholder?: string;
  leftAddon?: string;
  rightAddon?: string;
  size?: string;
  label?: string;
  variant?: string;
  status?: string;
  name?: string;
  onChange?: React.ChangeEventHandler;
  value?: string;
};
