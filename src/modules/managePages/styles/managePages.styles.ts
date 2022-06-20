import styled from 'styled-components';

export const PageItemContainer = styled.div(({ theme }) => ({
  background: theme.palette.greyScale[200],
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 5px',
  cursor: 'move',
  marginBottom: 17,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
export const PageTitleContainer = styled.div({
  display: 'flex',
  columnGap: 4,
  alignItems: 'center',
});
export const PageSettingDropDown = styled.div({
  display: 'flex',
  alignItems: 'center',
});
export const GrabIcon = styled.span(({ theme }) => ({
  cursor: 'move',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.greyScale[200],
}));
