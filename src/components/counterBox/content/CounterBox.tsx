import React from 'react';
import { WrapperCounter } from '../styles/counterBox.styles';
import { CounterBoxProps } from './counterBox_types';

const CounterBox: React.FC<CounterBoxProps> = ({
  children,
  ...rest
}: CounterBoxProps) => {
  return <WrapperCounter {...rest}>{children}</WrapperCounter>;
};

CounterBox.defaultProps = {};
export default CounterBox;
