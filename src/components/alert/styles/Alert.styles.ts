import styled from 'styled-components';
import { AlertProps } from '../content/Alert_types';

export const StyledAlert = styled.div<AlertProps>(
  ({ theme, type, variant, isClose }) => ({
    height: isClose ? '0px' : 'auto',
    display: isClose ? 'none' : 'flex',
    marginBottom: 16,
    border: `solid 2px ${
      theme.palette[type === 'info' ? 'primary' : type].main
    }`,
    color:
      variant === 'outlined'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.common.white,
    background:
      variant === 'filled'
        ? theme.palette[type === 'info' ? 'primary' : type].main
        : theme.palette.transparent,
    padding: '6px 16px',
    borderRadius: 4,
    transition: `height 300ms`,
    animationDuration: '2s',
  })
);

export const AlertTitle = styled.div(({ theme }) => ({
  ...theme.typography.h5,
}));
export const AlertDescription = styled.div(({ theme }) => ({
  ...theme.typography.subtitle1,
}));
export const AlertContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContentL: 'flex-start',
}));
export const AlertClose = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  cursor: 'pointer',
}));
