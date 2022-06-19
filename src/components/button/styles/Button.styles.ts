import styled from 'styled-components';
import { ButtonProps } from '../content/button_types';

const btnShape = {
  sharp: { borderRadius: 2 },
  rounded: { borderRadius: 50 },
};

export const StyledButton = styled.button<ButtonProps>(
  ({ theme, size, rounded, variant, color, block, shape }) => ({
    ...theme.sizes[size],
    ...theme.typography.button,
    ...btnShape[shape],
    width: block ? '100%' : 'auto',
    // borderRadius: rounded ? 50 : 8,
    border:
      variant === 'text' ? 'none' : `1px solid ${theme.palette[color].main}`,

    backgroundColor:
      variant === 'filled'
        ? theme.palette[color].main
        : theme.palette.common.transparent,

    color:
      variant === 'filled'
        ? theme.palette.common.white
        : theme.palette[color].main,

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: theme.general.transition,
    ['&:disabled']: {
      ...theme.palette.disabled,
      borderColor: '#ccc',
      cursor: 'not-allowed',
    },
    ['&:disabled:hover']: {
      ...theme.palette.disabled,
      borderColor: '#ccc',
      cursor: 'not-allowed',
    },

    ['&:hover']: {
      backgroundColor: variant !== 'text' && theme.palette[color].main,
      color: variant !== 'text' && theme.palette.common.white,
      borderColor: theme.palette[color],
      opacity: 0.85,
    },

    ['&:active']: {
      opacity: '0.75',
    },

    ['&:focus']: {
      outline: variant !== 'text' && `2px solid ${theme.palette[color].main}`,
      outlineOffset: 1,
    },
  })
);
