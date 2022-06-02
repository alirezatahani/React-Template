import styled from 'styled-components';
import { Row } from '../../../../components/grid';
import { Container, Input } from '../../../../components';
import { Card } from '../../../../components/card/index';

export const Jumbotron = styled(Row)(({}) => ({
  backgroundColor: 'whitesmoke',
  height: 300,
  textAlign: 'center',
}));
export const TemplateContainer = styled.div({
  maxWidth: '1040px',
  margin: '0 auto',
});
export const Wrapper = styled.div({
  backgroundColor: 'whitesmoke',
});
export const SectionContainer = styled(Container)({
  width: '100vw',
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
