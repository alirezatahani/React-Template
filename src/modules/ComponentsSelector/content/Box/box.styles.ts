import styled from 'styled-components';

export const BoxStyled = styled.div(({ theme }) => ({
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
  '&:hover': {
    backgroundColor: theme.palette.primary[600],
    transition: 'all 4ms',
  },
}));
export const BoxContent = styled.div(({ theme }) => ({
  ...theme.typography.overLineCaption,
  color: theme.palette.secondary.main,
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

export const BoxWrapper = styled.div(({}) => ({
  marginLeft: '2rem',
  marginTop: '2rem',
}));
export const Icon = styled.div(({ theme }) => ({
  marginTop: '1rem',
  color: '#B5A5A2',
  '&:hover': {
    color: theme.palette.common.white,
  },
}));
