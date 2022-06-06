import styled from 'styled-components';
import { TemolateContainerProps } from '../content/controlPanel_types';

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
export const ControlPanelWrapper = styled.div({
  display: 'flex',
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 999,
  height: '100vh',
});
export const TemplateContainer = styled.div<TemolateContainerProps>(
  ({ showControlPanel }) => ({
    width: showControlPanel ? 'calc(100% - 435px)' : '100%',
  })
);
