import * as React from 'react';
import { MainConfig } from '../../utils/constants';
import { Button } from '../../../components';
import { StyledSidebar } from '../styles/sidebar.styles';

type Props = {
  setComponentToRender?: any;
};
const Sidebar: React.FC<Props> = ({ setComponentToRender }: Props) => {
  const handleComponentToRender = (e: any) => {
    setComponentToRender(e.target.value);
  };
  return (
    <StyledSidebar>
      {Object.keys(MainConfig).map((component: string) => (
        <Button onClick={handleComponentToRender} value={component}>
          {component}
        </Button>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
