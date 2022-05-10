import styled from 'styled-components';
import { ColProps } from '../content/col/col_types';
import { devices } from '../utils/constants';
import { calculateWidth } from '../utils/utils';

export const StyledCol = styled.div<ColProps>`
  ${({ span, xs }) => (span ? calculateWidth(span) : calculateWidth(xs))};

  padding-left: 8px;
  padding-top: 8px;

  @media ${devices.xs} {
    ${({ xs }) => calculateWidth(xs)};
  }
  @media ${devices.sm} {
    ${({ sm }) => calculateWidth(sm)};
  }
  @media ${devices.md} {
    ${({ md }) => calculateWidth(md)};
  }
  @media ${devices.lg} {
    ${({ lg }) => calculateWidth(lg)};
  }
  @media ${devices.xl} {
    ${({ xl }) => calculateWidth(xl)};
  }
`;
