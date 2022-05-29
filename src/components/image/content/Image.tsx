import * as React from 'react';
import { ImageContainer, StyledImage } from '../styles/image.styles';
import { ImageProps } from './image_types';

const Image: React.FC<ImageProps> = ({ src, ...props }: ImageProps) => {
  return (
    <ImageContainer shape={props.shape} width={props.width}>
      <StyledImage src={src} {...props} />
    </ImageContainer>
  );
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;
