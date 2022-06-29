import styled from 'styled-components';

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
export const MainAbsolute = styled.div(({}) => ({
  position: 'absolute',
  bottom: -48,
  left: -63,
}));
export const Item = styled.div(({}) => ({
  marginLeft: '4rem',
}));
