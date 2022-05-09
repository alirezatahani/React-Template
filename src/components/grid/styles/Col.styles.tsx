import styled from 'styled-components';
import { Col } from '../content/col/col_types';
import { devices } from '../utils/constants';
import { calculateWidth } from '../utils/utils';

export const StyledCol = styled.div<Col>`
  width: ${({ span, xs }) =>
    span ? calculateWidth(span) : calculateWidth(xs)};

  @media ${devices.xs} {
    width: ${({ xs }) => calculateWidth(xs)};
  }
  @media ${devices.sm} {
    width: ${({ sm }) => calculateWidth(sm)};
  }
  @media ${devices.md} {
    width: ${({ md }) => calculateWidth(md)};
  }
  @media ${devices.lg} {
    width: ${({ lg }) => calculateWidth(lg)};
  }
  @media ${devices.xl} {
    width: ${({ xl }) => calculateWidth(xl)};
  }
`;
