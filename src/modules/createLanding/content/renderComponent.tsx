import * as React from 'react';
import { MainConfig } from '../utils/constants';
import { ComponentToRenderProps } from './renderComponent_types';

const RenderComponent: React.FC<ComponentToRenderProps> = ({
  componentToRender,
}: ComponentToRenderProps) => {
  if (typeof MainConfig[componentToRender] !== 'undefined') {
    return React.createElement(
      MainConfig[componentToRender].component,
      MainConfig[componentToRender].props
        ? MainConfig[componentToRender]?.props
        : null,
      MainConfig ? MainConfig[componentToRender].children : null
    );
  }
};

export default RenderComponent;
