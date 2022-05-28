import { ReactEventHandler } from 'react';

export type ImageContainerProps = {
  width?: string | number;
  shape?: 'rounded' | 'circle';
};
export type ImageProps = {
  alt?: string;
  width?: string | number;
  height?: string | number;
  src: string;
  shape?: 'rounded' | 'circle';
  fallback?: string;
  onClick?: () => void;
};
