import styled from 'styled-components';
import { Col } from '../content/col/col_types';
import { devices } from '../utils/constants';
import { calculateWidth } from '../utils/utils';

export const StyledCol = styled.div<Col>`
  ${({ span, xs }) => (span ? calculateWidth(span) : calculateWidth(xs))};

  @media ${devices.xs} {
    ${({ xs }) => xs && calculateWidth(xs)};
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
