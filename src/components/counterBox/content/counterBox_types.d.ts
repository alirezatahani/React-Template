import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'diamond';
  name?: string;
  values: 2 | 3 | 4;
  onChangeCounter?: React.ChangeEventHandler;
};
