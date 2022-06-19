import React from 'react';

export type SliderProps = {
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  value?: any;
  onChange?: (value: any) => void;
};
