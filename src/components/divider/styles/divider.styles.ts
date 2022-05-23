import styled from 'styled-components';
import { DividerProps } from '../content/divider_types';
import { handleAlign, handleTextAlign } from '../utils/utils';

export const StyledDivider = styled.hr<DividerProps>(({ theme, middle }) => ({
  width: middle ? '80%' : '100%',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: theme.palette.greyScale['400'],
  margin: '24px 0',
}));

export const DividerContainer = styled.div<DividerProps>(({ align }) => ({
  ...handleAlign[align],
  display: 'flex',
}));

export const DividerWithTextContainer = styled.div<DividerProps>(
  ({ theme, orientation }) => ({
    display: 'flex',
    margin: '16px 0',
    color: theme.palette.greyScale['400'],
    fontWeight: 500,
    fontSize: 16,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    ':before,:after': {
      content: '""',
      position: 'relative',
      top: '50%',
      borderTop: '1px solid transparent',
      borderTopColor: 'inherit',
      borderBottom: 0,
      transform: 'translateY(50%)',
    },
    ':before': {
      ...handleTextAlign[orientation].before,
      content: '""',
    },
    ':after': {
      content: '""',
      ...handleTextAlign[orientation].after,
    },
  })
);

export const DividerText = styled.span<DividerProps>`
  display: inline-block;
  padding: 0 1em;
`;
