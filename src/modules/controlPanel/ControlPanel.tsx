import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';
import ButtonControlPanel from './content/buttonControlPanel/ButtonControlPanel';
import GalleryControlPanel from './content/galleryControlPanel/GalleryControlPanel';
import { ControlPanelProps, SettingType } from './controlPanel_types';

const ControlPanel: React.FC<ControlPanelProps> = ({
  selected,
  initialValue,
  setInitialValue,
}: ControlPanelProps) => {
  const handleChange = (name: string, value: string | number) => {
    setInitialValue({
      ...initialValue,
      [name]: value,
    });
  };

  const settings: SettingType = {
    typography: (
      <TypographyControlPanel state={state} handleChange={handleChange} />
    ),
    button: <ButtonControlPanel state={state} handleChange={handleChange} />,
    gallery: <GalleryControlPanel />,
  };


  return (
    <div>
      <ControlPanelWrapper>
        {selected ? settings[selected.type] : ''}
      </ControlPanelWrapper>
    </div>
  );
};
export default ControlPanel;
