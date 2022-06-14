import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';
import ButtonControlPanel from './content/buttonControlPanel/ButtonControlPanel';
import GalleryControlPanel from './content/galleryControlPanel/GalleryControlPanel';

const ControlPanel: React.FC<any> = ({ selected, state, setState }: any) => {
  const handleChange = (evt: any) => {
    const getLabel = evt.kind ? evt.kind : evt.target.name;
    const getValue = evt.value ? evt.value : evt.target.value;
    console.log(getValue);
    setState({
      ...state,
      [getLabel]: getValue,
    });
  };

  const settings: any = {
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