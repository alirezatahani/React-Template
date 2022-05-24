import * as React from 'react';

export type AvatarProps = {
  style?: React.CSSProperties;
  //   children?: React.ReactNode;
  text?: string;
  alt?: string;
  size?: number | 'small' | 'medium' | 'large';
  src?: React.ReactNode | string;
  shape?: 'rounded' | 'square';
  bg?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning';
};
