import styled from 'styled-components';
import { Container, Input, Col } from '../../../../components';
import { Card } from '../../../../components/card/index';

export const Jumbotron = styled(Container)(({}) => ({
  backgroundColor: '#F5F5F5',
  height: 400,
}));
export const TemplateContainer = styled(Col)({
  textAlign: 'center',
});
export const Section = styled.section({
  padding: 24,
});

export const MainContainer = styled(Container)({
  backgroundColor: '#F5F5F5',
});
export const FormSection = styled.section({
  position: 'relative',
});
export const FormItemSection = styled.section({
  position: 'absolute',
});

export const HeroFormInput = styled(Input)({
  border: '1px solid black',
  backgroundColor: 'transparent',
  borderRadius: 4,
  width: '20vw',
  height: '3vw',
});
export const HeroCard = styled(Card)({
  border: 'none',
  height: 400,
});
