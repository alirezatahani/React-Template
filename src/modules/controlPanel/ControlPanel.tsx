import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';
import ButtonControlPanel from './content/buttonControlPanel/ButtonControlPanel';
import GalleryControlPanel from './content/galleryControlPanel/GalleryControlPanel';
import ManagePages from '@modules/managePages/content/ManagePages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      <TypographyControlPanel
        initialValue={initialValue}
        onChange={handleChange}
      />
    ),
    button: (
      <ButtonControlPanel initialValue={initialValue} onChange={handleChange} />
    ),
    gallery: <GalleryControlPanel />,
    pages: (
      <DndProvider backend={HTML5Backend}>
        <ManagePages />
      </DndProvider>
    ),
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
