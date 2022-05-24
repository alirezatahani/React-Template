import styled from 'styled-components';
import { CardProps } from '../content/card_types';
import { sizes } from '../utils/constants';
export const Paper = styled.div<CardProps>(({ theme, size }) => ({
  ...sizes[size],
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
  margin: 14,
  textAlign: 'left',
}));
