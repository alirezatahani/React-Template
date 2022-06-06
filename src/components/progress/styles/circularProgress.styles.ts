import styled, { css, keyframes } from 'styled-components';
import { ProgressProps } from '../content/progress_types';
const fill = keyframes`from {transform: rotate(0deg);}to {transform: rotate(135deg);}`;
const animation = css``;
export const CircularProgressWrap = styled.div({
  margin: ' 15px auto',
  width: 150,
  height: 150,
  backgroundColor: '#fefcff',
  borderRadius: '50%',
  border: '1px solid #cdcbd0',
});

export const CircularProgressCircle = styled.div({});
export const CircularProgressMaskFull = styled.div<ProgressProps>(
  ({ theme, completed }) => {
    completed = 1.8 * completed
    return {
      width: 150,
      height: 150,
      position: 'absolute',
      borderRadius: '50%',
      clip: 'rect(0px,150px,150px,75px)',
      /* animation, */
      transform: `rotate(${completed}deg)`,
    };
  }
);
export const CircularProgressMaskHalf = styled.div({
  width: 150,
  height: 150,
  position: 'absolute',
  borderRadius: '50%',
  clip: 'rect(0px,150px,150px,75px)',
});
export const CircularProgressFill = styled.div<ProgressProps>(
  ({ completed, theme, color }) => {
completed = 1.8 * completed
      return {
      width: 150,
      height: 150,
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: color
        ? theme.palette[color].main
        : theme.palette.common.black,
      clip: 'rect(0px,75px,150px,0px)',
      //   animation,
      transform: `rotate(${completed}deg)`,
    };
  }
);

export const CircularProgressInsideCircle = styled.div({
  width: '122px',
  height: '122px',
  borderRadius: '50%',
  backgroundColor: '#d2eaf1',
  lineHeight: '120px',
  textAlign: 'center',
  marginTop: '14px',
  marginLeft: '14px',
  color: '#1e51dc',
  position: 'absolute',
  fontWeight: '500',
  fontSize: '2rem',
  zIndex: 100,
});
