import { Spacing } from '../row/row_types';

export interface ColProps {
  children?: React.ReactNode;
  span?: number;
  spacing?: Spacing | number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
