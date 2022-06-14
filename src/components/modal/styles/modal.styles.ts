import styled from 'styled-components';
import { ModalProps } from '../content/modal_types';

export const ModalWrapper = styled.div({
  position:"fixed",
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  zIndex:9999,
})
export const ModalSection = styled.div<ModalProps>(({ visible }) => ({
  display: visible ? 'block' : 'none',
  width:"100%",
  position: 'fixed',
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)",
  zIndex: 9999,
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
