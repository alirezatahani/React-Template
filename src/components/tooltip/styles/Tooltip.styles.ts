import styled from 'styled-components';
import { ToolTipProps } from '../content/tooltip_types';

export const TooltipTarget = styled.div<ToolTipProps>(({}) => ({
  position: 'relative',
  display: 'inline-block',
  borderBottom: 1,
  height: 'fit-content',
}));

export const Tooltip = styled.div<ToolTipProps>(({ theme }) => ({
  visibility: 'visible',
  width: 100,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  textAlign: 'center',
  padding: 2,
  borderRadius: 4,
  position: 'absolute',
  zIndex: 1,
}));
