import * as React from 'react';
import { FlexRow } from '../../styles/Row.styles';
import { RowProps } from './row_types';

const Row: React.FC<RowProps> = ({ children, spacing }: RowProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.isValidElement(child)
      ? React.cloneElement(child, {
          spacing: spacing,
        })
      : child;
  });
  return (
    <div style={{ overflow: 'hidden' }}>
      <FlexRow spacing={spacing}>{childrenWithProps}</FlexRow>
    </div>
  );
};

export default Row;
