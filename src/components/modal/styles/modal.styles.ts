import styled from 'styled-components';
import { ModalWrapperProps } from '../content/modal_types';
export const ModalWrapper = styled.div<ModalWrapperProps>(({visible,theme})=>({
  display:visible?"block":"none",
  position:"fixed",
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor: theme.palette.greyScale[400],
  zIndex:9900,
}))
export const ModalSection = styled.div<ModalWrapperProps>(({ visible }) => ({
  display: visible ? 'block' : 'none',
  position: 'fixed',
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)",
  zIndex: 9999,
}));
export const ModalContainer = styled.div(({theme})=>({
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  maxHeight:"70vh",
  margin: '0 auto',
  borderRadius: '8px',
  padding: '30px',
  position:"relative",
  overflow:'scroll',
  "::-webkit-scrollbar": {
    width: "4px",
    height: "0px",
    borderRadius:"50%"
  },
  "::-webkit-scrollbar-track": {
    background: theme.palette.background.paper
  },
  "::-webkit-scrollbar-thumb": {
    background: theme.palette.greyScale[400]
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.greyScale[800]
  }
}));
export const ModalContent = styled.div(({theme})=>({
  ...theme.typography.subtitle2,
  textAlign:"center",
  padding:"0 1rem"
}));
export const ModalClose = styled.span(({theme})=>({
  position:"absolute",
  top:0,
  right:0,
  color: theme.palette.greyScale[400],
  cursor: 'pointer',
  padding:"1rem",
  transition:"color 200ms ease-in-out",
  ["&:hover"]:{
    color:theme.palette.greyScale[800]
  }
}));
export const ModalTitle = styled.div(({theme,color})=>({
  ...theme.typography.h5,
  textAlign:"center",
}))
