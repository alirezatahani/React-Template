import styled from 'styled-components';
import { ImageContainerProps, ImageProps } from '../content/image_types';

export const ImageContainer = styled.div<ImageContainerProps>(({ width }) => ({
  width: width,
}));
export const StyledImage = styled.img<ImageProps>(
  ({ theme, shape, width, height }) => ({
    ...theme.general.imageShapes[shape],
    width: width,
    height: height,
  })
);
