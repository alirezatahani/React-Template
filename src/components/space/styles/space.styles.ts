import styled from 'styled-components';
import { StyledSpaceProps } from '../content/space_types';

export const StyledSpace = styled.div<StyledSpaceProps>(
  ({ align, direction, wrap, spacing, alignItems }) => ({
    display: direction === 'horizontal' ? 'flex' : 'inline-flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: typeof spacing === 'number' ? spacing : null,
    columnGap: Array.isArray(spacing) && spacing[0],
    rowGap: Array.isArray(spacing) && spacing[1],
    justifyContent: align,
    alignItems,
  })
);
