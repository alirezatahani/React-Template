import styled from 'styled-components';
import { StyledTypographyProps } from '../content/typography_types';

export const TypographyContainer = styled.div<StyledTypographyProps>(
  ({ theme, variant }) => ({
    p: {
      ...theme.typography.body1,
    },
    h1: {
      ...theme.typography.h1,
    },
    h2: {
      ...theme.typography.h2,
    },
    h3: {
      ...theme.typography.h3,
    },
    h4: {
      ...theme.typography.h4,
    },
    h5: {
      ...theme.typography.h5,
    },
    h6: {
      ...theme.typography[variant === 'subtitle1' ? 'subtitle1' : 'subtitle2'],
    },
  })
);
