import { CSSProperties, ReactEventHandler } from 'react';

export type ImageContainerProps = {
  width?: string | number;
  shape?: 'rounded' | 'circle';
};
export type ImageProps = {
  alt?: string;
  width?: string | number;
  height?: string | number;
  src?: string;
  shape?: 'rounded' | 'circle';
  onError?: ReactEventHandler<HTMLImageElement> &
    React.SyntheticEvent<HTMLDivElement, Event>;
  onClick?: () => void;
  style?: CSSProperties;
};
