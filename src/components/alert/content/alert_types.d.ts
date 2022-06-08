import React from 'react';

export type AlertProps = {
  message: string;
  description?: string;
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning' | 'secondary';
  closable?: boolean;
  isClosed?: boolean;
  style?: React.CSSProperties;
  open?: boolean;
  action?: React.ReactNode;
  onClose?: () => void;
};
export type StyledAlertProps = {
  variant?: 'outlined' | 'filled';
  type?: 'info' | 'danger' | 'success' | 'warning' | 'secondary';
  closable?: boolean;
  isClosed?: boolean;
  style?: React.CSSProperties;
  action?: React.ReactNode;
};
