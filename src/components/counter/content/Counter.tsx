import React from 'react';
import { CounterProps } from './counter_types';
import {
  CounterContainer,
  HeroSpanLeft,
  HeroSpanRight,
  HeroResult,
  FormInput,
} from '../styles/Counter.styles';

const Counter: React.FC<CounterProps> = ({ ...rest }: CounterProps) => {
  return (
    <CounterContainer>
      <HeroSpanLeft>+</HeroSpanLeft>
      <HeroResult>
        <FormInput />
      </HeroResult>
      <HeroSpanRight>-</HeroSpanRight>
    </CounterContainer>
  );
};

Counter.defaultProps = {};
export default Counter;
