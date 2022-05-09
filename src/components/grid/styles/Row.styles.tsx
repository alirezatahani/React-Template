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
    margin-right: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xs)};
    margin-left: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xs)};
  }
  @media ${devices.sm} {
    margin-right: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.sm)};
    margin-left: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.sm)};
  }
  @media ${devices.md} {
    margin-right: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.md)};
    margin-left: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.md)};
  }
  @media ${devices.lg} {
    margin-right: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.lg)};
    margin-left: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.lg)};
  }
  @media ${devices.xl} {
    margin-right: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xl)};
    margin-left: ${({ columnSpace }) =>
      columnSpace && calculateGutterMargin(columnSpace.xl)};
  }

  > * {
    max-width: 100%;
    margin-top: ${({ rowSpace }) => rowSpace && `${rowSpace}rem`};
    padding-right: ${({ spacing }) =>
      spacing && calculateGutterPadding(spacing)};
    padding-left: ${({ spacing }) =>
      spacing && calculateGutterPadding(spacing)};

    @media ${devices.xs} {
      padding-right: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.xs)};
      padding-left: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.xs)};
    }
    @media ${devices.sm} {
      padding-right: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.sm)};
      padding-left: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.sm)};
    }
    @media ${devices.md} {
      padding-right: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.md)};
      padding-left: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.md)};
    }
    @media ${devices.lg} {
      padding-right: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.lg)};
      padding-left: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.lg)};
    }
    @media ${devices.xl} {
      padding-right: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.xl)};
      padding-left: ${({ columnSpace }) =>
        columnSpace && calculateGutterPadding(columnSpace.xl)};
    }
  }
`;
