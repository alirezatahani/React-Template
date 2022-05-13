import styled from 'styled-components';
import { ColProps } from '../content/col/col_types';
import { devices } from '../utils/constants';
import { calculateColPadding, calculateWidth } from '../utils/utils';

export const StyledCol = styled.div<ColProps>`
  ${({ span, xs }) => (span ? calculateWidth(span) : calculateWidth(xs))};

  ${({ spacing, xs, sm, md, lg, xl }) => {
    if (typeof spacing === 'number') {
      return `${calculateColPadding(spacing)};`;
    } else {
      return `
      @media ${devices.xs} {
        ${calculateColPadding(spacing.xs)};
        ${calculateWidth(xs)};
      }
      @media ${devices.sm} {
        ${calculateColPadding(spacing.sm)};
        ${calculateWidth(sm)};
      }
      @media ${devices.md} {
        ${calculateColPadding(spacing.md)};
        ${calculateWidth(md)};
      }
      @media ${devices.lg} {
        ${calculateColPadding(spacing.lg)};
        ${calculateWidth(lg)};
      }
      @media ${devices.xl} {
        ${calculateColPadding(spacing.xl)};
        ${calculateWidth(xl)};
     }
      `;
    }
  }}
`;
