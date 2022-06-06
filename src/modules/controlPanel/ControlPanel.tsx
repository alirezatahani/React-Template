import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';

const ControlPanel: React.FC = () => {
  return (
    <div>
      <ControlPanelWrapper>
        <TypographyControlPanel />
      </ControlPanelWrapper>
    </div>
  );
};
export default ControlPanel;
