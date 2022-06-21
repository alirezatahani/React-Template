import React from 'react';
import { CounterProps } from './counter_types';
import {
  CounterContainer,
  HeroSpanLeft,
  HeroSpanRight,
  HeroResult,
  FormInput,
} from '../styles/Counter.styles';

const Counter: React.FC<CounterProps> = ({
  onIncrease,
  onDecrease,
  name,
  value,
  onChange,
}: CounterProps) => {
  return (
    <CounterContainer>
      <HeroSpanLeft onClick={onIncrease}>+</HeroSpanLeft>
      <HeroResult>
        <FormInput name={name} value={value} onChange={onChange} />
      </HeroResult>
      <HeroSpanRight onClick={onDecrease}>-</HeroSpanRight>
    </CounterContainer>
  );
};

Counter.defaultProps = {};
export default Counter;
