import * as React from 'react';
import { DrawerProps } from './drawer_types';

const Drawer: React.FC<DrawerProps> = ({ children, ...rest }: DrawerProps) => {
  return (
    <>
      <></>
    </>
  );
};

Drawer.defaultProps = {};
export default Drawer;
