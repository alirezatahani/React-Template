import React from 'react';
export type TwoContentProps = {
  style?: React.CSSProperties;
  value: {
    value: number;
    position: string | 'right ' | 'left';
  }[];
  shape: 'inline';
  onChange?: (value: any) => void;
  onChangeMain?: (value: any) => void;
  isLocked?: boolean;
  onChangeLock?: (value: boolean) => void;
  name?: string;
};
