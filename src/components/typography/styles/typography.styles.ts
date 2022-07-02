import styled from 'styled-components';
import { StyledTypographyProps } from '../content/typography_types';

export const TypographyContainer = styled.div<StyledTypographyProps>(
  ({
    theme,
    variant,
    color,
    underline,
    disabled,
    strong,
    italic,
    textAlign,
  }) => ({
    color: color ? theme.palette[color].main : theme.palette.common.black,
    textDecoration: underline && 'underline',
    textAlign: textAlign,
    p: {
      ...theme.typography.body1,
      fontWeight: strong && 'bold',
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h1: {
      ...theme.typography.h1,
      fontWeight: strong ? 'bold' : theme.typography.h1.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h2: {
      ...theme.typography.h2,
      fontWeight: strong ? 'bold' : theme.typography.h2.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h3: {
      ...theme.typography.h3,
      fontWeight: strong ? 'bold' : theme.typography.h3.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h4: {
      ...theme.typography.h4,
      fontWeight: strong ? 'bold' : theme.typography.h4.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h5: {
      ...theme.typography.h5,
      fontWeight: strong ? 'bold' : theme.typography.h5.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },
    h6: {
      ...theme.typography[variant === 'subtitle1' ? 'subtitle1' : 'subtitle2'],
      fontWeight: strong ? 'bold' : theme.typography.subtitle1.fontWeight,
      fontStyle: italic ? 'italic' : 'inherit',
    },

    '> *': {
      ...theme.typography[disabled ? ('typographyDisabled' as string) : null],
    },
  })
);
