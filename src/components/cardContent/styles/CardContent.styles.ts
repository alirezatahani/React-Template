import styled from 'styled-components';
import { CardContentProps } from '../content/cardContent_types';

export const Title = styled.p<CardContentProps>(({}) => ({
  fontSize: 16,
}));

export const Content = styled.p<CardContentProps>(({}) => ({
  margin: 14,
  textAlign: 'left',
}));
