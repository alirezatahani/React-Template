import { ThemeTypes } from 'src/global/theme_types';
import { css } from 'styled-components';

export const handleButtonBgColor = (theme: ThemeTypes, kind: string) => {
  const { primary, warning, danger } = theme.colors;

  switch (kind) {
    case 'primary':
      return primary;
    case 'warning':
      return warning;
    case 'danger':
      return danger;
    case 'default':
      return 'transparent';
  }
};

export const handleButtonSize = (theme: ThemeTypes, size: string) => {
  switch (size) {
    case 'sm':
      return css`
        height: ${theme.button.buttonHeightSm};
        padding: ${theme.button.buttonPaddingSm};
      `;
    case 'lg':
      return css`
        height: ${theme.button.buttonHeightLg};
        padding: ${theme.button.buttonPaddingLg};
      `;
    default:
      return css`
        height: ${theme.button.buttonHeightMd};
        padding: ${theme.button.buttonPaddingMd};
      `;
  }
};

export const handleButtonFontSize = (theme: ThemeTypes, size: string) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${theme.button.buttonFontSm};
      `;
    case 'md':
      return css`
        font-size: ${theme.button.buttonFontMd};
      `;
    case 'lg':
      return css`
        font-size: ${theme.button.buttonFontLg};
      `;
  }
};
