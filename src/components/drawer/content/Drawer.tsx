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
  CloseOverlay,
  Ul,
} from '../styles/Drawer.styles';
const Drawer: React.FC<DrawerProps> = ({ ...rest }: DrawerProps) => {
  const [state, setState] = React.useState<boolean>(false);

  return (
    <>
      {!state ? (
        <Nav>
          <HamburgerIcon onClick={() => setState(true)}>
            <Div></Div>
            <Div></Div>
            <Div></Div>
          </HamburgerIcon>
          <Title>{rest.title}</Title>
        </Nav>
      ) : (
        <Overlay>
          <CloseIcon onClick={() => setState(false)}>Close</CloseIcon>
          <OverlayContent>
            <Ul>
              <Li>first item</Li>
            </Ul>
          </OverlayContent>
        </Overlay>
      )}
    </>
  );
};

Drawer.defaultProps = {};
export default Drawer;
