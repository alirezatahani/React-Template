import { ThemeTypes } from 'src/global/theme_types';
import { css } from 'styled-components';

export const handleInputFocus = (variant: string, theme: ThemeTypes) => {
  switch (variant) {
    case 'outlined':
      return css`
        border: solid ${theme.input.borderWidth} ${theme.colors.primary};
        box-shadow: 0px 0px 3px ${theme.colors.primary};
      `;
    case 'filled':
      return css`
        border: solid ${theme.input.borderWidth} ${theme.colors.primary};
        background-color: #eee;
      `;
    case 'standard':
      return css`
        border: none;
        border-bottom: solid 2px ${theme.colors.primary};
      `;
  }
};
