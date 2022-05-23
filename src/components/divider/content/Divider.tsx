import * as React from 'react';
import { DividerContainer, StyledDivider } from '../styles/divider.styles';
import { DividerProps } from './divider_types';

const Divider: React.FC<DividerProps> = ({ align, ...props }: DividerProps) => {
  return (
    <DividerContainer align={align}>
      <StyledDivider {...props} />
    </DividerContainer>
  );
};

Divider.defaultProps = {
  middle: false,
};

export default Divider;
