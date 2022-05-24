import * as React from 'react';
import { MainConfig } from '../../utils/constants';

const RenderComponent = ({
  componentToRender,
}: {
  componentToRender: string;
}) => {
  const renderer = (configs: any) => {
    //@ts-ignore
    if (typeof MainConfig[componentToRender] !== 'undefined') {
      return React.createElement(
        //@ts-ignore
        MainConfig[componentToRender].component,
        configs[componentToRender].props
          ? configs[componentToRender]?.props
          : null,
        configs ? configs[componentToRender].children : null
      );
    }
  };

  return <>{renderer(MainConfig)}</>;
};

export default RenderComponent;
