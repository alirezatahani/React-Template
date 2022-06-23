import Counter from '@components/counter/content/Counter';
import React from 'react';
import { WrapperCounter } from '../styles/counterBox.styles';
import { CounterBoxProps } from './counterBox_types';

const CounterBox: React.FC<CounterBoxProps> = ({
  name,
  value,
  onIncrease,
  onDecrease,
  onChange,
  ...rest
}: CounterBoxProps) => {
  return (
    <WrapperCounter {...rest}>
      <Counter value={value} />
      <Counter value={value} />
      <Counter value={value} />
      <Counter value={value} />
    </WrapperCounter>
  );
};

CounterBox.defaultProps = {};
export default CounterBox;
