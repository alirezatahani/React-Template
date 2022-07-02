import React from 'react';

export type CounterProps = {
  style?: React.CSSProperties;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onChange?: React.ChangeEventHandler;
  name?: string;
  value?: any;
};
