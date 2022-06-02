import styled from 'styled-components';
import { FooterProps } from '../content/footer_types';
export const FooterStyled = styled.footer<FooterProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  height: 60,
}));
export const Item = styled.div<FooterProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 24,
  ...theme.typography.body1,
}));
export const SocialItem = styled.div<FooterProps>(({ theme }) => ({
  textAlign: 'center',
  ...theme.typography.body1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const SocialContent = styled.div<FooterProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 17,
  ...theme.typography.body1,
}));
export const Logo = styled.div<FooterProps>(({ theme }) => ({
  textAlign: 'center',
  marginLeft: 24,
  ...theme.typography.body1,
}));
export const Ul = styled.div<FooterProps>(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
