import styled from 'styled-components';
import { CardMediaProps } from '../content/cardMedia_types';

export const Media = styled.div<CardMediaProps>(({ src }) => ({
  width: '100%',
  height: 100,
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));
