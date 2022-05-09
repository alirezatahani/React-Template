import styled from 'styled-components';
import { devices } from '../utils/constants';
import { RowStyleProps } from '../content/row/row_types';
import { calculateGutterMargin, calculateGutterPadding } from '../utils/utils';

export const FlexRow = styled.div<RowStyleProps>`
  display: flex;
  flex-wrap: wrap;

  margin-right: ${({ spacing }) =>
    spacing ? calculateGutterMargin(spacing) : '0.5rem'};
  margin-left: ${({ spacing }) =>
    spacing ? calculateGutterMargin(spacing) : '0.5rem'};

  margin-top: ${({ rowSpace }) => rowSpace && `${rowSpace * -1}rem`};

  @media ${devices.xs} {
    ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xs)};
  }
  @media ${devices.sm} {
    ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.sm)};
  }
  @media ${devices.md} {
    ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.md)};
  }
  @media ${devices.lg} {
    ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.lg)};
  }
  @media ${devices.xl} {
    ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xl)};
  }

  > * {
    max-width: 100%;
    margin-top: ${({ rowSpace }) => rowSpace && `${rowSpace}rem`};
    ${({ spacing }) => spacing && calculateGutterPadding(spacing)};

    @media ${devices.xs} {
      ${({ columnSpace }) => calculateGutterPadding(columnSpace.xs)};
    }
    @media ${devices.sm} {
      ${({ columnSpace }) => calculateGutterPadding(columnSpace.sm)};
    }
    @media ${devices.md} {
      ${({ columnSpace }) => calculateGutterPadding(columnSpace.md)};
    }
    @media ${devices.lg} {
      ${({ columnSpace }) => calculateGutterPadding(columnSpace.lg)};
    }
    @media ${devices.xl} {
      ${({ columnSpace }) => calculateGutterPadding(columnSpace.xl)};
    }
  }
`;
