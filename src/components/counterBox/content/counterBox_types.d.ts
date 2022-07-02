import React from 'react';

export type CounterBoxProps = {
  style?: React.CSSProperties;
  shape?: 'square' | 'diamond';
  name?: any;
  isLocked?: boolean;
  onChange?: (value: any) => void;
  onChangeMain?: (value: any) => void;
  onChangeLock?: (value: boolean) => void;
  value?: {
    value: number;
    position: string | 'top' | 'right ' | 'bottom' | 'left';
  }[];
};
