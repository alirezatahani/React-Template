import * as React from 'react';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | string;
  title: string;
};
