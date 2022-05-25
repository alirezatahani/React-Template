import styled from 'styled-components';
import { DrawerProps } from '../content/drawer_types';
import { Position } from '../utils/constants';
export const Overlay_Y = styled.div<DrawerProps>(
  ({ theme, visible, position, width }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    transition: 'all 1s',
    overflow: 'hidden',
    borderRadius: '0px 2px 4px 0px',
    zIndex: 1,
    width: visible ? `${width}px` : 0,
    ...Position[position],
  })
);
export const OverlayContent_Y = styled.div(({ theme }) => ({
  flex: 'none',
  textAlign: 'center',
  padding: 20,
  color: theme.palette.common.white,
}));

export const Overlay_X = styled.div<DrawerProps>(
  ({ theme, visible, position, height }) => ({
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: '0px 2px 4px 0px',
    zIndex: -1,
    width: visible ? '100%' : 0,
    ...Position[position],
    transform: visible ? 'translateY(0px)' : 'translateY(-500px)',
    transition: position == 'top' ? 'transform 1s ease-in-out' : null,
    height: visible ? `${height}px` : 0,
  })
);

export const OverlayContent_X = styled.div(({ theme }) => ({
  flex: 'none',
  textAlign: 'center',
  padding: 20,
  color: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}));
