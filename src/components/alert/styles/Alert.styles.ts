import styled, { css, keyframes } from 'styled-components';
import { AlertProps, StyledAlertProps } from '../content/alert_types';

export const ActionContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
}));
export const AlertTitle = styled.div(({ theme }) => ({
  ...theme.typography.h5,
}));
export const AlertDescription = styled.div(({ theme }) => ({
  ...theme.typography.subtitle1,
}));
export const AlertContent = styled.div(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContentL: 'flex-start',
}));
export const AlertClose = styled.div<AlertProps>({
  marginLeft: '8px',
  cursor: 'pointer',
});

export const StyledAlert = styled.div<StyledAlertProps>(
  ({ theme, type, variant, isClosed }) => ({
    display: isClosed ? 'none' : 'flex',
    alignItems: 'center',
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
  })
);
