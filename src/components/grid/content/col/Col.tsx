import * as React from 'react';
import { StyledCol } from '../../styles/Col.styles';
import { ColProps } from './col_types';

const Col: React.FC<ColProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  span,
  children,
}: ColProps) => {
  return (
    <StyledCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} span={span}>
      {children}
    </StyledCol>
  );
};

export default Col;
