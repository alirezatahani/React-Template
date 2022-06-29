import styled from 'styled-components';
import { ThreeContentProps } from './threeContent_types';

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}));
export const MainRelative = styled.div(({}) => ({
  position: 'relative',
  borderBottom: '1px dashed black',
  marginBottom: '3rem',
}));
export const MainAbsolute = styled.div<ThreeContentProps>(({ shape }) => ({
  position: 'absolute',
  bottom: -48,
  left: -63,
}));

export const Container = styled.div(({ theme }) => ({
  position: 'relative',
  width: 180,
  height: 60,
  border: `1px dashed ${theme.palette.disabled.backgroundColor}`,
  margin: '0px auto',
  borderRadius: 14,
  marginBottom: '2rem',
  marginTop: '2rem',
}));
export const TopStyled = styled.div(({}) => ({
  position: 'absolute',
  left: 28,
  right: 0,
  top: -16,
}));

export const RightStyled = styled.div(({}) => ({
  position: 'absolute',
  left: -62,
  bottom: 0,
  top: 42,
}));
export const LeftStyled = styled.div(({}) => ({
  position: 'absolute',
  right: -62,
  bottom: 0,
  top: 42,
}));
export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
