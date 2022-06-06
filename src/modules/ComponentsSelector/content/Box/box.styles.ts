import styled from 'styled-components';

export const BoxStyled = styled.div(({}) => ({
  backgroundColor: 'white',
  boxShadow: '4px 3px 11px -3px white',
  marginRight: '1rem',
  marginBottom: '1rem',
  cursor: 'move',
  float: 'left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 90,
  height: 90,
  borderRadius: 8,
}));
export const BoxContent = styled.div(({ theme }) => ({
  ...theme.typography.table2,
  color: theme.palette.secondary.main,
}));

export const BoxWrapper = styled.div(({}) => ({
  marginLeft: '2rem',
  marginTop: '2rem',
}));
