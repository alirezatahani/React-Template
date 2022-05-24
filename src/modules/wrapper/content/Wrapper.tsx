import * as React from 'react';
import { StyledWrapper } from '../styles/wrapper.styles';
import { WrapperPropsType } from './wrapper_types';

const Wrapper: React.FC<WrapperPropsType> = ({
  children,
}: WrapperPropsType) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
