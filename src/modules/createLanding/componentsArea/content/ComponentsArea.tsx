import * as React from 'react';
import { ComponentAreaContainer } from '../styles/componentsArea.styles';
import { ComponentsAreaTypes } from './componentsArea_types';

const ComponentsArea: React.FC<ComponentsAreaTypes> = ({
  children,
}: ComponentsAreaTypes) => {
  return <ComponentAreaContainer>{children}</ComponentAreaContainer>;
};

export default ComponentsArea;
