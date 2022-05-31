import * as React from 'react';
import { Spacing } from '../row/row_types';

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  spacing?: Spacing | number;
  style?: React.CSSProperties;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  style?: React.CSSProperties;
}
