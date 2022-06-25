import styled from 'styled-components';
import { CounterBoxProps } from '../content/counterBox_types';

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '2rem',
}));

export const Container = styled.div<CounterBoxProps>(({ shape, theme }) => ({
  position: 'relative',
  width: 200,
  height: shape === 'square' ? 70 : 100,
  border: `1px dashed ${theme.palette.disabled.backgroundColor}`,
  margin: '0px auto',
  borderRadius: 4,
  marginBottom: '2rem',
  marginTop: '2rem',
}));
export const TopStyled = styled.div<CounterBoxProps>(({ shape }) => ({
  position: 'absolute',
  left: 0,
  right: shape === 'square' ? 200 : 0,
  top: -16,
}));

export const BottomStyled = styled.div<CounterBoxProps>(({ shape }) => ({
  position: 'absolute',
  left: shape === 'square' ? 200 : 0,
  right: 0,
  bottom: -48,
}));
export const RightStyled = styled.div<CounterBoxProps>(({ shape }) => ({
  position: 'absolute',
  left: -62,
  bottom: shape === 'square' ? -48 : 0,
}));
export const LeftStyled = styled.div<CounterBoxProps>(({ shape }) => ({
  position: 'absolute',
  right: -62,
  bottom: shape === 'square' ? 22 : 0,
}));
export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
