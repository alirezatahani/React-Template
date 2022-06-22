import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'customShape';
  onIncrease?: () => void;
  onDecrease?: () => void;
  onChange?: React.ChangeEventHandler;
  name?: string;
  value?: any;
};
