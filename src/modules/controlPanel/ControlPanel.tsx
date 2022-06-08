import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';
import ButtonControlPanel from './content/buttonControlPanel/ButtonControlPanel';
import ImageControlPanel from './content/imageControlPanel/ImageControlPanel';

const settings: any = {
  typography: <TypographyControlPanel />,
  button: <ButtonControlPanel />,
  image: <ImageControlPanel />,
};

const ControlPanel: React.FC<any> = ({ selected }: any) => {
  return (
    <div>
      <ControlPanelWrapper>
        {selected ? settings[selected.type] : ''}
      </ControlPanelWrapper>
    </div>
  );
};
export default ControlPanel;
