import styled from 'styled-components';

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}));

export const Container = styled.div(({ theme }) => ({
  position: 'relative',
  width: 180,
  height: 1,
  border: `1px dashed ${theme.palette.disabled.backgroundColor}`,
  margin: '0px auto',
  borderRadius: 14,
  marginBottom: '2rem',
  marginTop: '2rem',
}));
