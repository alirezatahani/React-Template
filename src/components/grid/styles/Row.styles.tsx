import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    max-width: 100%;
    margin-top: 5px;
  }
`;
