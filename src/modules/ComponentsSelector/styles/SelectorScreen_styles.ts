import styled from 'styled-components';
import { Col } from '@components/grid';

export const DropCol = styled(Col)({
  height: '100vh',
});

export const DragCol = styled(Col)({
  height: '100vh',
  backgroundColor: 'whitesmoke',
});

export const TextWrapper = styled.div(({}) => ({
  marginLeft: '2rem',
  marginTop: '2rem',
}));
