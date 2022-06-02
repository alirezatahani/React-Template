import styled, { css } from 'styled-components';
import { Row } from "../../../../components/grid";
import { Button } from "../../../../components/button";
import { Space } from "../../../../components/space";
import { Typography } from "../../../../components/typography";
import { Image } from "../../../../components/image";
import { ImageProps } from '@components/image/content/image_types';

export type MainTitleTypes = {
    image?: string;
  };

export const MainTitleRow = styled(Row)<MainTitleTypes>(({ image }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    ':after': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background: '#ec1212',
      opacity: 0.7,
      zIndex: -1,
    },
  }));

export const MainTitleImage = styled(Image)(({}) => ({
    borderRadius: '50%',
    width: '530px',
    height: '530px',
}));

export const MainTexts = styled(Typography)(({}) => ({
    padding: '100px',
    margin: 'auto',
}));

export const AddTitleText = styled(Row)(({}) => ({
    color: '#7FAC11FF',
}));

export const CallToActionButton = styled(Button)(({}) => ({
    backgroundColor: 'rgb(127, 172, 17)',
    border: 'none',
    padding: '27px 40px',
    borderRadius: '999px',
    fontWeight: 'bold',
    marginTop: '50px',
    ":hover": {backgroundColor: 'rgb(151, 198, 29)', border: 'none'}
}));

export const ImagesContainer = styled(Row)(({}) => ({
    backgroundColor: '#FFF',
    padding: '70px 10px',
}));

export const PizzaRoundedImage = styled(Image)(({}) => ({
    borderRadius: '50%',
    width: '200px',
}));

export const ImagesContainer2 = styled(Row)(({}) => ({
    backgroundColor: 'rgb(255, 244, 244)',
    padding: '70px 10px',
}));

export const ImagesRow = styled.div(({}) => ({
    height: '330px',
}));

export const ImageContainer = styled.div(({}) => ({
    width: '330px',
    height: '330px',
    margin: '5px',
}));

export const PizzaImage = styled(Image)<ImageProps>(({}) => ({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
}));

export const Price = styled(Typography)(({}) => ({
    color: '#EC1212FF',
    fontSize: '18px',
    fontWeight: 'bold',
}));

export const MenuButton = styled(Button)(({}) => ({
    backgroundColor: 'rgb(236, 18, 18)',
    padding: '24px 40px',
    borderRadius: '999px',
    fontWeight: 'bold',
}));