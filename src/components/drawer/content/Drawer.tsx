import * as React from 'react';
import { DrawerProps } from './drawer_types';
import {
  Overlay_Y,
  OverlayContent_Y,
  Overlay_X,
  OverlayContent_X,
} from '../styles/Drawer.styles';

const Drawer: React.FC<DrawerProps> = ({ children, ...rest }: DrawerProps) => {
  // React.useEffect(() => {
  //   if (!visible) {
  //     onClose();
  //   }
  // }, [visible]);

  return (
    <>
      {rest.position === 'top' || rest.position === 'bottom' ? (
        <Overlay_X {...rest}>
          <OverlayContent_X {...rest}>{children}</OverlayContent_X>
        </Overlay_X>
      ) : (
        <Overlay_Y {...rest}>
          <OverlayContent_Y {...rest}>{children}</OverlayContent_Y>
        </Overlay_Y>
      )}
    </>
  );
};

Drawer.defaultProps = {
  width: 378,
  height: 378,
};
export default Drawer;
