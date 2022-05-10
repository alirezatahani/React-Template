import * as React from 'react';
import { FlexRow } from '../../styles/Row.styles';
import { RowProps } from './row_types';

const Row: React.FC<RowProps> = ({
  children,
  spacing = 8,
}: RowProps) => {

  console.log(typeof spacing, spacing, 'spacing')
  return (
    <div style={{ overflow: 'hidden' }}>
      <FlexRow spacing={spacing}>
        {children}
      </FlexRow>
    </div>
  );
};

export default Row;
