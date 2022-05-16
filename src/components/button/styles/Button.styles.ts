import { ThemeTypes } from 'src/global/theme_types';
import styled from 'styled-components';
import { ButtonProps } from '../content/button_types';

export const StyledButton = styled.button<ButtonProps>(
  ({ theme, size, rounded, variant, color, block }) => ({
    ...theme.sizes[size],
    ...theme.typography.button,
    width: block ? '100%' : 'auto',
    borderRadius: rounded ? 50 : 8,
    border:
      variant === 'text' ? 'none' : `1px solid ${theme.palette.primary.main}`,
    backgroundColor:
      variant === 'filled'
        ? theme.palette.primary.main
        : theme.palette.common.white,
    color:
      variant === 'filled'
        ? theme.palette.common.white
        : theme.palette.primary.main,

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    ['&:[disabled]']: {
      color: 'rgba(0, 0, 0, 0.3)',
      borderColor: '#ccc',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      textShadow: 'none',
      boxShadow: 'none',
      cursor: 'not-allowed',
    },
    // ['&:hover']{
    //   transition: "all 200ms linear"
    //   color: ${({ theme, kind }) =>
    // kind === 'default' && theme.colors.primary};
    //   border-color: ${({ theme }) => theme.colors.primary};
    //   opacity: 0.85;
    // }

    // &:active {
    //   transition: all 150ms linear;
    //   opacity: 0.75;
    // }

    // &:focus {
    //   outline: 2px solid ${({ theme }) => theme.button.buttonFocusOutline};
    //   outline-offset: 1px;
    // }
  })
);

// export const StyledButton = styled.button<ButtonProps>`

//   shape === 'round' ? theme.borderRadiusRound : theme.borderRadius};

// justify-content: center;
// align-items: center;
// white-space: nowrap;
// touch-action: manipulation;
// margin-right: 8px;
// margin-bottom: 12px;
// display: inline-flex;
// cursor: pointer;

// &[disabled]:hover {
//   border-color: #ccc;
// }

// transition: all 200ms linear;

// `;
