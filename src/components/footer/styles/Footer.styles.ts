import styled from 'styled-components';
import { FooterProps } from '../content/footer_types';
import { Row, Col } from '../../grid';

export const FooterWrapper = styled.footer<FooterProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  height: 60,
  width: '100%',
}));
export const FooterContainer = styled(Row)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'inherit',
}));
export const Item = styled.div(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  marginLeft: 24,
  cursor: 'pointer',
}));
export const SocialItems = styled.div(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const SocialContent = styled.div(({ theme }) => ({
  ...theme.typography.body1,
  marginLeft: 17,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));
export const Logo = styled.div(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  marginLeft: 24,
}));
export const Ul = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
