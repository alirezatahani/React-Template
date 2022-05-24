import * as React from 'react';

export type CardProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'default' | 'small' | 'large';
  color?: 'primary' | 'secondary' | string;
  title: string;
};
