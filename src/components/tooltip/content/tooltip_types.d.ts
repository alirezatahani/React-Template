import * as React from 'react';

export type ToolTipProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string;
  bg?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning';
};
