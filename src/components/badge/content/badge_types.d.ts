import * as React from 'react';

export type BadgeProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  max?: number;
  badgeContent?: number;
  rounded?: boolean;
  placement?: { vertical: string; horizontal: string };
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning';
};
