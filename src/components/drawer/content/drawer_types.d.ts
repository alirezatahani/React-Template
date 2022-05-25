import * as React from 'react';

export type DrawerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  visible: boolean;
  width?: number;
  position?: 'top' | 'right' | 'left' | 'bottom';
  onClose?: () => void;
};
