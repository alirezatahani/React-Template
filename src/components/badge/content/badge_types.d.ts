import * as React from 'react';

export type BadgeProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  max?: number;
  badgeContent?: number;
  rounded?: boolean;
  placement?:
    | 'topRight'
    | 'topLeft'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'leftCenter';

  variant?: 'dot' | 'standard';
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning';
};
