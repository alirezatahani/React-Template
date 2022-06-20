import * as React from 'react';

export type SwitchProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  checked?: boolean | number;
  size?: 'sm' | 'md';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
};
