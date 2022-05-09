import { ColumnSpace } from '../col/col_types';

type RowProps = {
  children: React.ReactNode;
  rowSpace?: number;
  columnSpace?: ColumnSpace;
  spacing?: number;
};

type RowStyleProps = {
  rowSpace?: number;
  columnSpace?: ColumnSpace;
  spacing?: number;
};
