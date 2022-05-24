import * as React from 'react';
import { MainConfig } from '../../utils/constants';

const RenderComponent = ({ componentToRender, KeysToComponentMap }: any) => {
  function renderer(configs: any) {
    if (typeof KeysToComponentMap[componentToRender] !== 'undefined') {
      return React.createElement(
        KeysToComponentMap[componentToRender],
        configs[componentToRender].props
          ? configs[componentToRender]?.props
          : null,
        configs ? configs[componentToRender].children : null
      );
    }
  }

  return <>{renderer(MainConfig)}</>;
};

export default RenderComponent;
