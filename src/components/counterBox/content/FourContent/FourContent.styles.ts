import styled from 'styled-components';

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
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
