import * as React from 'react';

export type AlertProps = {
  message: string;
  description?: string;
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning';
  closable?: boolean;
  isClose?: boolean;
  style?: React.CSSProperties;
  kind?: 'alert' | 'toast';
  open?: boolean;
  autoHideDuration?: number;
  onClose?: () => void;
  animation?: any;
  children?: React.ReactNode;
  Toast?: React.FC;
};

export type ToastProps = {
  Toast?: React.FC;
  children?: React.ReactNode;
} & AlertProps;
