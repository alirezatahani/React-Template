import React from 'react';
import { Spacing } from '../row/row_types';

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  spacing?: Spacing | number;
  style?: React.CSSProperties;
  display?: 'flex';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
