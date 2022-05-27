import * as React from 'react';
import { StyleImage } from '../styles/image.styles';
import { ImageProps } from './image_types';

const Image: React.FC<ImageProps> = ({ src, ...props }: ImageProps) => {
  return (
    <>
      <StyleImage src={src} {...props} />
    </>
  );
};
Image.defaultProps = {
  src: `https://picsum.photos/100/200`,
  alt: 'image',
  width: '200',
  heigth: '300',
  rounded: false,
};

export default Image;
