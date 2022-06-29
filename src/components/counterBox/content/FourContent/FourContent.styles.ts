import styled from 'styled-components';

export const TopStyled = styled.div(({}) => ({
  position: 'absolute',
  left: 38,
  right: 0,
  top: -16,
}));
export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}));

export const BottomStyled = styled.div(({}) => ({
  position: 'absolute',
  left: 38,
  right: 0,
  bottom: -48,
}));
export const RightStyled = styled.div(({}) => ({
  position: 'absolute',
  left: -62,
  bottom: 0,
}));
export const LeftStyled = styled.div(({}) => ({
  position: 'absolute',
  right: -62,
  bottom: 0,
}));

export const Container = styled.div(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 100,
  border: `1px dashed ${theme.palette.disabled.backgroundColor}`,
  margin: '0px auto',
  borderRadius: 4,
  marginBottom: '2rem',
  marginTop: '2rem',
}));
