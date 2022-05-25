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
const Drawer: React.FC<DrawerProps> = ({ visible, ...rest }: DrawerProps) => {

  
  const [state, setState] = React.useState(false);

  return (
    <>
      {state ? (
        <Overlay>
          <CloseIcon onClick={() => setState(false)}>Close</CloseIcon>

          <OverlayContent>
            <Ul>
              <Li>first item</Li>
            </Ul>
          </OverlayContent>
        </Overlay>
      ) : null}
    </>
  );
};

Drawer.defaultProps = {};
export default Drawer;
