import styled from 'styled-components';
import { ModalProps } from '../content/modal_types';

export const ModalSection = styled.div<ModalProps>(({ visible }) => ({
  display: visible ? 'block' : 'none',
  position: 'fixed',
  zIndex: 100,
  paddingTop: '200px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.3)',
}));
export const ModalContainer = styled.div({
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundColor: '#fefefe',
  width: '70%',
  margin: '0 auto',
  borderRadius: '5px',
  padding: '20px',
});
export const ModalContent = styled.div({
  padding: '0 2rem',
});
export const ModalClose = styled.span({
  color: ' #aaaaaa',
  cursor: 'pointer',
});
