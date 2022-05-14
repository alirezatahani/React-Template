import styled from 'styled-components';
import {
  handleInputFocus,
  handleInputSize,
  handleInputStatus,
  handleInputVariant,
} from '../../utils/utils';
import { InputProps } from '../input/input_types';

export const InputContainer = styled.div`
  margin: 0 0 20px;
  label {
    padding-left: 5px;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || 'height: 40px;font-size: 16px;',
}))<InputProps>`
  margin: 9px 3px;
  outline: none;
  padding-left: 11px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.borderRadius};

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
