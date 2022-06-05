import React from 'react';
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
  src: 'https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/610efd88-ae0d-48b7-96fb-8bc45cc8ad61.png',
  width: '100%',
  height: 'auto',
};

export default Image;
