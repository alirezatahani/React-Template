import React from 'react';

export type ThreeContentProps = {
  style?: React.CSSProperties;
  value: {
    value: number;
    position: string | 'top' | 'right ' | 'left';
  }[];
  shape: 'triangle';
};