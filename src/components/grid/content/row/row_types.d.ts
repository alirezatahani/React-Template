import * as React from 'react';

type RowProps = {
  children: React.ReactNode;
  spacing?: Spacing | number;
};
type Spacing = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};
export type RowStyleProps = {
  spacing?: number | Spacing;
};
