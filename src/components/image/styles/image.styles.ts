import styled from 'styled-components';
import { ImageProps } from '../content/image_types';

export const StyleImage = styled.img<ImageProps>(
  ({ rounded }) => ({
    borderRadius: rounded ? "20px" : "2px",
  })
);
