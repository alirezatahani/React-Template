import styled from 'styled-components';
import {
  InputAddonProps,
  InputContainerProps,
  InputLabelProps,
  InputProps,
} from '../content/input/input_types';

export const StyledInput = styled.input<InputProps>(
  ({ theme, status, scale, rounded, variant }) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    color: theme.palette.common.black,
    outline: 'none',
    paddingLeft: 11,
    width: '100%',
    transition: theme.general.transition,
    background: variant === 'filled' && theme.palette.greyScale['200'],
    border: `${
      variant === 'outlined' || variant === 'filled'
        ? `solid 1px ${
            status ? theme.palette[status].main : theme.palette.greyScale['400']
          }`
        : `none`
    }`,
    borderBottom:
      variant === 'standard' &&
      `solid 2px ${status ? theme.palette[status].main : '#00000029'}`,
    borderRadius: rounded ? theme.general.borderRadius : 4,
    ['::placeholder']: {
      opacity: 0.6,
    },

    [':disabled']: {
      ...theme.palette.disabled,
      border: 'none',
      cursor: 'not-allowed',
    },
    ['&:focus']: {
      outline: `${
        variant === 'outlined' || variant === 'filled'
          ? `solid 2px ${
              status
                ? theme.palette[status].main
                : theme.palette['primary'].main
            }`
          : `none`
      }`,

      borderBottom:
        variant === 'standard' &&
        `solid 2px ${
          status ? theme.palette[status].main : theme.palette['primary'].main
        }`,
      outlineOffset: 1,
    },
  })
);

export const InputContainer = styled.div<InputContainerProps>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 10px',
});

export const InputLabel = styled.span<InputLabelProps>({
  paddingRight: '20px',
  whiteSpace: 'nowrap',
});

export const InputRightAddon = styled.span<InputAddonProps>(
  ({ theme, scale }) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    backgroundColor: theme.palette.greyScale.main,
    color: theme.palette.common.white,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    whiteSpace: 'nowrap',
    borderBottomRightRadius: 0,
    paddingInline: 10,
  })
);

export const InputLeftAddon = styled.span<InputAddonProps>(
  ({ theme, scale }) => ({
    ...theme.sizes[scale],
    ...theme.typography.input,
    backgroundColor: theme.palette.greyScale.main,
    color: theme.palette.common.white,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    whiteSpace: 'nowrap',
    borderBottomRightRadius: 0,
    paddingInline: 10,
  })
);
