import * as React from 'react';
import { DrawerProps } from './drawer_types';
import { Overlay, OverlayContent, OverlayTop } from '../styles/Drawer.styles';

const Drawer: React.FC<DrawerProps> = ({ children, ...rest }: DrawerProps) => {
  // React.useEffect(() => {
  //   if (!visible) {
  //     onClose();
  //   }
  // }, [visible]);

  return (
    <>
      {rest.position === 'top' || rest.position === 'bottom' ? (
        <OverlayTop {...rest}>{children}</OverlayTop>
      ) : (
        <Overlay {...rest}>
          <OverlayContent {...rest}>{children}</OverlayContent>
        </Overlay>
      )}
    </>
  );
};

Drawer.defaultProps = {};
export default Drawer;
