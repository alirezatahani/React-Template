import styled from 'styled-components';
import { CardProps } from '../content/card_types';
export const Paper = styled.div<CardProps>(({ theme }) => ({
  width: 300,
  height: 220,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  overflow: 'hidden',
  overflowWrap: 'anywhere',

  position: 'relative',
}));
export const Title = styled.p<CardProps>(({}) => ({
  fontSize: 16,
}));

export const Content = styled.p<CardProps>(({}) => ({
  margin: 20,
  textAlign: 'left',
}));
