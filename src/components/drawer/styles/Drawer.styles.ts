import styled from 'styled-components';
import { DrawerProps } from '../content/drawer_types';

export const Nav = styled.div<DrawerProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  height: 50,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 20,
}));

export const Div = styled.div<DrawerProps>(({}) => ({
  width: 35,
  height: 5,
  backgroundColor: 'whitesmoke',
  margin: ' 6px 0',
  borderRadius: 4,
}));
export const HamburgerIcon = styled.div<DrawerProps>(({}) => ({
  cursor: 'pointer',
}));
export const CloseIcon = styled.p<DrawerProps>(({}) => ({
  fontSize: 14,
  color: 'white',
  backgroundColor: 'red',
  cursor: 'pointer',
  position: 'absolute',
  padding: 5,
  right: 0,
  borderRadius: '4px 0px 0px 4px',
}));
export const Title = styled.p<DrawerProps>(({}) => ({
  fontSize: 14,
  marginLeft: '2rem',
  color: 'white',
}));

// overlay

export const Overlay = styled.div<DrawerProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  height: '100vh',
  width: 300,
  position: 'relative',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // textAlign: 'center',
  // opacity: 0,
  // transition: 'all var(--menu-speed) ease',
}));

export const OverlayContent = styled.div<DrawerProps>(({}) => ({
  // position: 'relative',
  // top: 0,
  // left: 0,
  // height: '100%',
  // width: '100%',
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  // opacity: 0,
  // transition: 'opacity 0.4s ease-in',
}));

export const Ul = styled.ul<DrawerProps>(({}) => ({
  listStyle: 'none',
}));
export const Li = styled.li<DrawerProps>(({}) => ({
  padding: '1rem 0',
}));

export const CloseOverlay = styled.div<DrawerProps>(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  opacity: 0,
  transition: 'all var(--menu-speed) ease',
}));
