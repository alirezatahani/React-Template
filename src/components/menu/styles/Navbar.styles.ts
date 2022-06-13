import styled from 'styled-components';
import { NavbarProps } from '../content/navbar_types';
import { Row } from '../../grid';

export const NavbarWrapper = styled.nav<NavbarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.common.black,
  height: 60,
  width: '100%',
}));
export const NavbarContainer = styled(Row)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'inherit',
}));
export const Item = styled.div<NavbarProps>(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  marginLeft: 24,
  cursor: 'pointer',
}));
export const SocialItem = styled.div<NavbarProps>(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const SocialContent = styled.div<NavbarProps>(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  marginLeft: 17,
  cursor: 'pointer',
}));
export const Logo = styled.div<NavbarProps>(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  marginLeft: 24,
}));
export const Ul = styled.div<NavbarProps>(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
