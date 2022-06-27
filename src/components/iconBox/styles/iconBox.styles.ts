import styled from 'styled-components';
import { IconBoxContainerProps } from '../content/iconBox_types';

export const IconBoxContainer = styled.div<IconBoxContainerProps>(
  ({ theme, isActive }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: isActive
      ? `${theme.palette.primary.main} 0px 0px 5px 3px`
      : 'rgb(100 151 203 / 31%) 0px 0px 5px 1px',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 15,
    paddingBlock: 30,
    cursor: 'pointer',
    transition: 'box-shadow 400ms ease',
    '&:hover': {
      boxShadow: `${theme.palette.primary.main} 0px 0px 5px 0px`,
    },
  })
);
