import styled from 'styled-components';
import { Container, Button } from '@components/index';

export const Jumbotron = styled(Container)(({}) => ({
  backgroundColor: '#F5F5F5',
  height: 460,
}));

export const Section = styled.section({
  padding: 24,
  marginBottom: '4rem',
});

export const HeroButton = styled(Button)({
  marginTop: '2rem',
  marginBottom: '4rem',
});
