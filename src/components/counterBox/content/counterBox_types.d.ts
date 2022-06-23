import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'customShape';
  onChange?: (values: number[], name: string) => void;
  name: string;
  values: number[];
};
