import * as React from 'react';
import { FlexRow } from '../../styles/Row.styles';
import { RowProps } from './row_types';

const Row: React.FC<RowProps> = ({
  children,
  columnSpace,
  rowSpace,
  spacing,
}: RowProps) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <FlexRow rowSpace={rowSpace} columnSpace={columnSpace} spacing={spacing}>
        {children}
      </FlexRow>
    </div>
  );
};

export default Row;
