import * as React from 'react';
import { StyledCol } from '../styles/Col.styles';
type Props = {
  children: React.ReactNode;
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

const Col: React.FC<Props> = ({
  sm,
  md,
  lg,
  xl,
  xxl,
  span,
  children,
}: Props) => {
  return (
    <StyledCol sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} span={span}>
      {children}
    </StyledCol>
  );
};

export default Col;
