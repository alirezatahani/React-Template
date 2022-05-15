import { ThemeTypes } from 'src/global/theme_types';
import { css } from 'styled-components';

export const handleInputSize = (size: string) => {
  switch (size) {
    case 'sm':
      return `height: 32px;font-size: 14px;`;
    case 'md':
      return `height: 40px;font-size: 16px;`;
    case 'lg':
      return `height: 48px;font-size: 18px;`;
    default:
      return `
      height: 40px;
      font-size: 16px;
      `;
  }
};

export const handleInputStatus = (
  status: string,
  theme: any,
  variant: string
) => {
  switch (status) {
    case 'error':
      if (variant !== 'standard') {
        return css`
          border: solid ${theme.input.borderWidth} ${theme.colors.danger} !important;
        `;
      } else {
        return css`
          border: none;
          border-bottom: solid 2px ${theme.colors.danger} !important;
        `;
      }
    case 'warning': {
      if (variant !== 'standard') {
        return css`
          border: solid ${theme.input.borderWidth} ${theme.colors.warning} !important;
        `;
      } else {
        return css`
          border: none;
          border-bottom: solid 2px ${theme.colors.warning} !important;
        `;
      }
    }
    case 'success': {
      if (variant !== 'standard') {
        return css`
          border: solid ${theme.input.borderWidth} ${theme.colors.success} !important;
        `;
      } else {
        return css`
          border: none;
          border-bottom: solid 2px ${theme.colors.success} !important;
        `;
      }
    }
  }
};

export const handleInputVariant = (theme: ThemeTypes, variant: string) => {
  switch (variant) {
    case 'outlined':
      return css`
        border: solid ${theme.input.borderWidth} ${theme.input.borderColor};
      `;
    case 'standard':
      return css`
        border: none;
        border-bottom: solid 2px ${theme.input.borderColor};
      `;
    case 'filled':
      return css`
        border: 1px solid #eee;
        background-color: #eee;
      `;
  }
};

export const handleInputFocus = (variant: string, theme: ThemeTypes) => {
  switch (variant) {
    case 'outlined':
      return css`
        border: solid ${theme.input.borderWidth} ${theme.colors.primary};
        box-shadow: 0px 0px 3px ${theme.colors.primary};
      `;
    case 'standard':
      return css`
        border: none;
        border-bottom: solid 2px ${theme.colors.primary};
      `;
    case 'filled':
      return css`
        border: solid ${theme.input.borderWidth} ${theme.colors.primary};
        background-color: #eee;
      `;
  }
};
