import styled from 'styled-components';
import { Row } from '../../../../components/grid';
import { Container, Input } from '../../../../components';
import { Card } from '../../../../components/card/index';

export const Jumbotron = styled(Row)(({}) => ({
  backgroundColor: '#F5F5F5',
  height: 400,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
}));
export const TemplateContainer = styled.section({
  maxWidth: '1040px',
  margin: '0 auto',
});
export const Section = styled.section({
  padding: 24,
});
export const Wrapper = styled.section({
  backgroundColor: 'whitesmoke',
});
export const SectionContainer = styled(Container)({
  width: '100vw',
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
