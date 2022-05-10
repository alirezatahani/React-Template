import { ColumnSpace } from '../col/col_types';

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
type RowStyleProps = {
  spacing?: number | Spacing;
};
