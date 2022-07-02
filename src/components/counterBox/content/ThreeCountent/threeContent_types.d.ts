import React from 'react';

export type ThreeContentProps = {
  style?: React.CSSProperties;
  value: {
    value: number;
    position: string | 'top' | 'right ' | 'left';
  }[];
  shape: 'triangle';
  onChange?: (value: any) => void;
  onChangeMain?: (value: any) => void;
  isLocked?: boolean;
  onChangeLock?: (value: boolean) => void;
};
