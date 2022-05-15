import * as React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: string;
  kind?: string;
  shape?: string;
  block?: boolean;
};
