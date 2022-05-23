import styled from 'styled-components';
import { DividerProps } from '../content/divider_types';
import { handleAlign } from '../utils/utils';

export const StyledDivider = styled.hr<DividerProps>(({ theme, middle }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: middle ? '80%' : '100%',
  fontSize: 14,
  borderTop: '1px solid rgba(0,0,0,0.09)',
  borderRadius: 1,
  margin: '20px 0',
}));

export const DividerContainer = styled.div<DividerProps>(({ align }) => ({
  ...handleAlign[align],
  display: 'flex',
}));
