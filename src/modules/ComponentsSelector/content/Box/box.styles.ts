import styled from 'styled-components';

export const BoxStyled = styled.div(({}) => ({
  backgroundColor: 'white',
  boxShadow: '4px 3px 11px -3px #E5D8D6',
  marginRight: 6,
  marginBottom: 6,
  cursor: 'move',
  float: 'left',
  textAlign: 'center',
  width: 90,
  height: 90,
  borderRadius: 8,
}));
export const BoxContent = styled.div(({ theme }) => ({
  ...theme.typography.overLineCaption,
  color: theme.palette.secondary.main,
}));

export const BoxWrapper = styled.div(({}) => ({
  marginLeft: '2rem',
  marginTop: '2rem',
}));
export const Icon = styled.div(({}) => ({
  marginTop: '1rem',
  color: '#B5A5A2',
}));
