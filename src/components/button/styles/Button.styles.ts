import styled from 'styled-components';
import { ButtonProps } from '../content/button_types';
import {
  handleButtonBgColor,
  handleButtonFontSize,
  handleButtonSize,
} from '../utils/utils';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, kind }) => handleButtonBgColor(theme, kind)};

  ${({ theme, size }) => handleButtonSize(theme, size)};
  ${({ theme, size }) => handleButtonFontSize(theme, size)};

  cursor: pointer;
  display: inline-flex;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  touch-action: manipulation;
  margin-right: 8px;
  margin-bottom: 12px;
  border: 1px solid
    ${({ theme, kind }) =>
      kind === 'default' ? theme.button.borderColor : 'transparent'};
  color: ${({ theme, kind }) =>
    kind !== 'default' ? theme.colors.white : theme.colors.black};

  border-radius: ${({ theme, shape }) =>
    shape === 'round' ? theme.borderRadiusRound : theme.borderRadius};
  transition: all 200ms linear;

  &[disabled] {
    color: rgba(0, 0, 0, 0.3);
    border-color: #ccc;
    background: rgba(0, 0, 0, 0.08);
    text-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
  }
  &[disabled]:hover {
    border-color: #ccc;
  }

  &:hover {
    transition: all 200ms linear;
    color: ${({ theme, kind }) =>
      kind !== 'default' ? '' : theme.colors.primary};

    border-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.button.buttonFocusOutline};
    outline-offset: 1px;
  }
`;
