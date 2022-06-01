import styled from 'styled-components';
import { NavbarProps } from '../content/navbar_types';

export const Nav = styled.nav<NavbarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.common.black,
  height: 40,
}));
export const Item = styled.div<NavbarProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 24,
  ...theme.typography.body1,
}));
export const SocialItem = styled.div<NavbarProps>(({ theme }) => ({
  textAlign: 'center',
  ...theme.typography.body1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const SocialContent = styled.div<NavbarProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 17,
  ...theme.typography.body1,
}));
export const Logo = styled.div<NavbarProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 24,
  ...theme.typography.body1,
}));
export const Ul = styled.div<NavbarProps>(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
