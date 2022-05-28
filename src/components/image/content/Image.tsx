import * as React from 'react';
import { ImageContainer, StyledImage } from '../styles/image.styles';
import { ImageProps } from './image_types';

const Image: React.FC<ImageProps> = ({ src, ...props }: ImageProps) => {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(src);
  const onError = () => setImgSrc(props.fallback);
  return (
    <ImageContainer shape={props.shape} width={props.width}>
      <StyledImage
        onError={onError}
        src={imgSrc ? imgSrc : props.fallback}
        {...props}
      />
    </ImageContainer>
  );
};

Image.defaultProps = {
  width: '100%',
  height: 'auto',
};

export default Image;
