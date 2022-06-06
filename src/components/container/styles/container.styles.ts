import styled from 'styled-components';
import { ContainerProps } from '../content/container_types';
import { mediaQueries } from '../utils/mediaQuery';

export const MainContainer = styled.div<ContainerProps>(({ fluid }) => ({
  width: '100%',
  overflow: 'hidden',
  margin: 'auto',
  height: 'inherit',

  [mediaQueries('xs')]: {
    maxWidth: 'calc(100% - 20%)',
  },
  [mediaQueries('sm')]: {
    maxWidth: fluid ? '100%' : 'calc(100% - 20%)',
  },
  [mediaQueries('md')]: {
    maxWidth: fluid ? '100%' : 'calc(100% - 20%)',
  },
  [mediaQueries('lg')]: {
    maxWidth: fluid ? '100%' : 'calc(100% - 20%)',
  },
  [mediaQueries('xl')]: {
    maxWidth: fluid ? '100%' : 'calc(100% - 20%)',
  },
}));
