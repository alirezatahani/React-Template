import * as React from 'react';
import { MainConfig } from '../../utils/constants';
import { Button } from '../../../../components';
import { StyledSidebar } from '../styles/sidebar.styles';

type Props = {
  setComponentToRender?: any;
};
const Sidebar: React.FC<Props> = ({ setComponentToRender }: Props) => {
  const handleComponentToRender = (componentName: string) => {
    setComponentToRender(componentName);
  };
  return (
    <StyledSidebar>
      {Object.keys(MainConfig).map((key: string, index: number) => (
        <Button
          key={index}
          onClick={() => handleComponentToRender(key)}
          value={key}
        >
          {key}
        </Button>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
