import * as React from 'react';
import { DrawerProps } from './drawer_types';
import {
  OverlayLeftRight,
  OverlayContentLeftRight,
  OverlayTop,
  OverlayBottom,
  OverlayContentTopBottom,
} from '../styles/Drawer.styles';

const Drawer: React.FC<DrawerProps> = ({ children, ...rest }: DrawerProps) => {
  // React.useEffect(() => {
  //   if (!visible) {
  //     onClose();
  //   }
  // }, [visible]);

  function handlePosition() {
    if (rest.position == 'top') {
      return (
        <OverlayTop {...rest}>
          <OverlayContentTopBottom {...rest}>
            {children}
          </OverlayContentTopBottom>
        </OverlayTop>
      );
    }
    if (rest.position === 'bottom') {
      return (
        <OverlayBottom {...rest}>
          <OverlayContentTopBottom {...rest}>
            {children}
          </OverlayContentTopBottom>
        </OverlayBottom>
      );
    } else {
      return (
        <OverlayLeftRight {...rest}>
          <OverlayContentLeftRight {...rest}>
            {children}
          </OverlayContentLeftRight>
        </OverlayLeftRight>
      );
    }
  }

  return <>{handlePosition()}</>;
};

Drawer.defaultProps = {
  width: 378,
  height: 278,
};
export default Drawer;
