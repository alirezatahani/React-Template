import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'diamond';
  name?: string;
  onChange?: (value: any) => void;
  onChangeMain?: (value: any) => void;
  value?: {
    value: number;
    position: string | 'top' | 'right ' | 'bottom' | 'left';
  }[];
};
