import React from 'react';
import { ControlPanelWrapper } from './styles/controlPanel.styles';
import TypographyControlPanel from './content/typographyControlPanel/TypographyControlPanel';
import ButtonControlPanel from './content/buttonControlPanel/ButtonControlPanel';

const ControlPanel: React.FC<any> = ({
  selected,
  initialValue,
  setInitialValue,
}: any) => {
  const handleChange = (name: string, value: string | number) => {
    setInitialValue({
      ...initialValue,
      [name]: value,
    });
  };

  const settings: any = {
    typography: (
      <TypographyControlPanel
        initialValue={initialValue}
        onChange={handleChange}
      />
    ),
    button: (
      <ButtonControlPanel state={initialValue} handleChange={handleChange} />
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
