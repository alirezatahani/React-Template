import React from 'react';
import { CounterContentProps } from './counterContent_types';
import { Main } from './styles/CounterContent.styles';

const CounterContent: React.FC<CounterContentProps> = ({
  position,
  children,
}: CounterContentProps) => {
  return <Main position={position}>{children}</Main>;
};

CounterContent.defaultProps = {};
export default CounterContent;
