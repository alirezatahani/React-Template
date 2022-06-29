import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'diamond';
  name?: string;
  number: 2 | 3 | 4;
  onChange?: React.ChangeEventHandler;
  value?: {
    value: number;
    position: string | 'top' | 'right ' | 'bottom' | 'left';
  }[];
};
