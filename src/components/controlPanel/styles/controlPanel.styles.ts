import styled from 'styled-components';

export const ControlPanelSettingContainer = styled.div(({ theme }) => ({
  width: 360,
  background: theme.palette.background.paper,
  padding: 10,
}));
export const ControlPanelItemLabel = styled.div({
  fontSize: 12,
});
export const ControlPanelItemContainer = styled.div({
  paddingBottom: 20,
});
export const SideButtonsContainer = styled.div({
  background: '#323232',
  paddingInline: 20,
  paddingTop: 30,
});
