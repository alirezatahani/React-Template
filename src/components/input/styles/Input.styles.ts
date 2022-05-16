import styled, { css } from 'styled-components';
import {
  handleInputFocus,
  handleInputSize,
  handleInputStatus,
  handleInputVariant,
} from '../utils/utils';
import {
  InputProps,
  InputAddonProps,
  InputContainerProps,
} from '../content/input/input_types';

export const InputContainer = styled.div<InputContainerProps>`
  margin: 0 0 20px;
  display: ${({ hasAddon }) => (hasAddon ? 'flex' : 'grid')};
  width: 100%;
  label {
    padding-left: 5px;
    padding-bottom: 10px !important;
  }
`;

export const InputLeftAddon = styled.span<InputAddonProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0;
  white-space: nowrap;
  border-bottom-right-radius: 0;
  padding-inline: 10px;
  /* padding: 5px 11px; */
  ${({ size }) => handleInputSize(size)}
  background-color: #3f444e;
  color: #fff;
`;
export const InputRightAddon = styled.span<InputAddonProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 0;
  white-space: nowrap;
  border-bottom-right-radius: 0;
  padding-inline: 10px;
  ${({ size }) => handleInputSize(size)}
  background-color: ${({ theme }) => theme.input.addonBg};
  color: ${({ theme }) => theme.input.addonTextColor};
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || 'height: 40px;font-size: 16px;',
}))<InputProps>`
  outline: none;
  padding-left: 11px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  ${({ leftAddon }) =>
    leftAddon
      ? css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `
      : css`
          border-radius: ${({ theme }) => theme.borderRadius};
        `}

  ${({ size }) => handleInputSize(size)};

  ${({ status, theme, variant }) => handleInputStatus(status, theme, variant)}

  ${({ theme, variant }) => handleInputVariant(theme, variant)}

  &:focus {
    ${({ theme, variant }) => handleInputFocus(variant, theme)}
  }

  ::placeholder {
    opacity: 0.6;
  }
`;
