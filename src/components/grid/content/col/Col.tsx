import * as React from 'react';
import { StyledCol } from '../../styles/Col.styles';
import { ColProps } from './col_types';

const Col: React.FC<ColProps> = ({ children, spacing, ...rest }: ColProps) => {
  return (
    <StyledCol spacing={spacing} {...rest}>
      {children}
    </StyledCol>
  );
};

export default Col;
