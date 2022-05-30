import styled from 'styled-components';
import { ContainerProps } from '../content/container_types';
import { mediaQueries } from '../utils/mediaQuery';

export const MainContainer = styled.div<ContainerProps>(({ fluid }) => ({
  width: '100%',
  overflow: 'hidden',
  margin: '0 auto',
  padding: '7vh 2vw',
  [mediaQueries('xs')]: {
    width: '100%',
  },
  [mediaQueries('sm')]: {
    width: fluid ? '100%' : 576,
  },
  [mediaQueries('md')]: {
    width: fluid ? '100%' : 960,
  },
  [mediaQueries('lg')]: {
    width: fluid ? '100%' : 1028,
  },
  [mediaQueries('xl')]: {
    width: fluid ? '100%' : 1140,
  },
}));
