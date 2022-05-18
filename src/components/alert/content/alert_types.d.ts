import * as React from 'react';

export type AlertProps = {
  message: string;
  description?: string;
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning' | 'secondary';
  closable?: boolean;
  isClose?: boolean;
  style?: React.CSSProperties;
  open?: boolean;
};
export type StyledAlertProps = {
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning' | 'secondary';
  closable?: boolean;
  isClose?: boolean;
  style?: React.CSSProperties;
};
