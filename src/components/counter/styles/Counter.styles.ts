import styled from 'styled-components';
import { CounterProps } from '../content/counter_types';
import { Input } from '@components/input';

export const CounterContainer = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const HeroSpanLeft = styled.span(({}) => ({
  width: 30,
  height: 30,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '4px 0px 0px 4px',
}));
export const HeroSpanRight = styled.span(({}) => ({
  width: 30,
  height: 30,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '0px 4px 4px 0px',
}));
export const HeroResult = styled.span(({}) => ({
  width: 60,
  height: 30,
}));
export const FormInput = styled(Input)({
  border: '1px solid #F5F5F5',
  height: 30,
  textAlign: 'center',
  borderRadius: 0,
  ' :focus': {
    outline: 'none',
  },
});
