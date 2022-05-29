import styled, { GlobalStyleComponent, ThemedGlobalStyledClassProps } from 'styled-components';
import { ProgressProps } from '../content/progress_types';

export const ProgressContainer = styled.div({
  height: 20,
  width: '100%',
  backgroundColor: '#e0e0de',
  borderRadius: 50,
  margin: 50,
});
export const ProgressFiller = styled.div<ProgressProps>(
  ({ completed, color,theme }) => {
    return {
      height: '100%',
      width: `${completed}%`,
      backgroundColor:   color ? theme.palette[color].main : theme.palette.common.black,
      borderRadius: 'inherit',
      textAlign: 'right',
    };
  }
);
export const ProgressLabel = styled.span({
  padding: 5,
  color: 'white',
});
