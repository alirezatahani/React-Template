import styled from 'styled-components';
import { TemolateContainerProps } from '../controlPanel_types';

export const ControlPanelSettingContainer = styled.div(({ theme }) => ({
  width: 360,
  background: theme.palette.background.paper,
  padding: 10,
}));
export const ControlPanelItemLabel = styled.div({
  fontSize: 12,
  paddingBottom: 8,
});
export const ControlPanelItemContainer = styled.div({
  paddingBottom: 20,
});
export const SideButtonsContainer = styled.div({
  background: '#323232',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: 20,
  height: '100vh',
  position: 'fixed',
  top: 0,
  width: '8%',
});
export const ControlPanelWrapper = styled.div({
  display: 'flex',
  position: 'fixed',
  boxShadow: '0 0 2px 0px #ccc',
  height: '100vh',
  right: '7%',
  top: 0,
  zIndex: 999,
});
export const TemplateContainer = styled.div<TemolateContainerProps>(
  ({ showControlPanel }) => ({
    width: showControlPanel ? 'calc(100% - 435px)' : '100%',
  })
);