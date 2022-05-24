import * as React from 'react';
import { ComponentAreaContainer } from '../styles/componentsArea.styles';
import { ComponentsAreaTypes } from './componentsArea_types';

const ComponentsArea: React.FC<ComponentsAreaTypes> = ({
  children,
}: ComponentsAreaTypes) => {
  return (
    <ComponentAreaContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '70%',
        }}
      >
        {children}
      </div>
    </ComponentAreaContainer>
  );
};

export default ComponentsArea;
