import * as React from 'react';

export type SwitchProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
  checked?: boolean;
  size?: 'sm' | 'md';
  label?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  value?: 'top' | 'start' | 'bottom' | 'end';
};
