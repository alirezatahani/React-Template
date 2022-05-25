import * as React from 'react';
import { DrawerProps } from './drawer_types';
import {
  Div,
  HamburgerIcon,
  Li,
  Nav,
  Overlay,
  OverlayContent,
  Title,
  CloseIcon,
  Ul,
} from '../styles/Drawer.styles';

const Drawer: React.FC<DrawerProps> = ({
  visible,
  children,
  onClose,
  ...rest
}: DrawerProps) => {
  React.useEffect(() => {
    if (!visible) {
      onClose();
    }
  }, [visible]);

  return (
    <Overlay {...rest} style={{ width: visible ? 300 : 0 }}>
      {children}
    </Overlay>
  );
};

Drawer.defaultProps = {};
export default Drawer;
