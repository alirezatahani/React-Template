import styled from 'styled-components';
import {
  TextareaContainerProps,TextareaLabelProps,TextareaProps
} from '../content/textarea_types';

export const StyledTextarea = styled.textarea<TextareaProps>(
  ({ theme, status, scale, rounded, variant ,width,height}) => ({
    ...theme.sizes[scale],
    color: theme.palette.common.black,
    outline: 'none',
    paddingLeft: 11,
    width: width? width:"100%",
    height:height? height:"",
    transition: theme.general.transition,
    background: variant === 'filled' && theme.palette.greyScale['200'],
    border: `${
      variant === 'outlined' || variant === 'filled'
        ? `solid 1px ${
            status ? theme.palette[status].main : theme.palette.greyScale['200']
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

export const TextareaContainer = styled.div<TextareaContainerProps>(({direction,align})=>({
  display: 'flex',
  flexDirection: direction==="column"? "column" :"row",
  justifyContent: 'center',
  alignItems: align==='center'?"center":"flex-start",
  margin: '0 0 20px',
}));

export const TextareaLabel = styled.span<TextareaLabelProps>({
  paddingRight: '20px',
  whiteSpace: 'nowrap',
});
