import styled from 'styled-components';
import { CardProps } from '../content/card_types';

export const Paper = styled.div<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.common.black}`,
  borderRadius: 4,
  overflow: 'hidden',
  overflowWrap: 'anywhere',
  position: 'relative',
  height: 'auto',
  width: 'auto',
}));
