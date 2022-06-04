import styled from 'styled-components';
import { CardContentProps } from '../content/cardContent_types';

export const Title = styled.p<CardContentProps>(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.common.black,
}));

export const Content = styled.p<CardContentProps>(({ theme }) => ({
  margin: 14,
  textAlign: 'left',
  color: theme.palette.common.black,
}));
