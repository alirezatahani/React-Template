import styled from 'styled-components';

export const StyledInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '0.7rem .9rem',
}))`
  outline: none;
  width: 100%;
  padding: ${(props) => props.size};
`;
