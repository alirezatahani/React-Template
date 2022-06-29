import React from 'react';
export type FourContentProps = {
  style?: React.CSSProperties;
  value: {
    value: number;
    position: string | 'right ' | 'left' | 'top' | 'left';
  }[];
  shape: 'diamond' | 'square';
  onChange?: (value: any) => void;
};
