import styled from 'styled-components';

export const CollapseItemContainer = styled.div({
  display: 'flex',
  paddingInline: 6,
  flexDirection: 'column',
  justifyContent: 'center',
  borderBottom: '1px solid #e5e5e5',
});
export const CollapseItemTitle = styled.div(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 14,
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 0',
  cursor: 'pointer',
}));
export const ItemTitle = styled.div`
  padding-left: 5px;
`;
export const CollapseItemContent = styled.div<any>(
  ({ theme, showContent }) => ({
    height: showContent ? 'auto ' : '0',
    display: showContent ? 'block' : 'none',
    transition: theme.general.transition,
    paddingLeft: 5,
    marginBottom: showContent && 30,
  })
);
