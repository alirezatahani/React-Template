import styled from 'styled-components';
import { CardProps } from '../content/card_types';
export const Paper = styled.div<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  overflow: 'hidden',
  overflowWrap: 'anywhere',
  position: 'relative',
  height: 'auto',
  width: 'auto',
}));
