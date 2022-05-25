import styled from 'styled-components';
import { DrawerProps } from '../content/drawer_types';
import { Position } from '../utils/constants';
export const Overlay = styled.div<DrawerProps>(
  ({ theme, visible, position }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    transition: 'all 1s',
    overflow: 'hidden',
    borderRadius: '0px 2px 4px 0px',
    zIndex: 1000,
    width: visible ? 300 : 0,
    ...Position[position],
  })
);

export const OverlayContent = styled.div(({ theme }) => ({
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 20,
  color: theme.palette.common.white,
}));

export const OverlayTop = styled.div<DrawerProps>(
  ({ theme, visible, position }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '0px 2px 4px 0px',
    zIndex: -1,
    width: visible ? '100%' : 0,
    ...Position[position],
    transform: visible ? 'translateY(0px)' : 'translateY(-500px)',
    transition: position == 'top' ? 'transform 1s ease-in-out' : null,
    height: visible ? 240 : 0,
  })
);
