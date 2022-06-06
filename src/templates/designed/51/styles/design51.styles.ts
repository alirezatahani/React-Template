import styled, { css } from 'styled-components';
import { Row, Col } from "../../../../components/grid";
import { Button } from "../../../../components/button";
import { Space } from "../../../../components/space";
import { Typography } from "../../../../components/typography";
import { Image } from "../../../../components/image";
import { ImageProps } from '@components/image/content/image_types';

export type HeroContainerTypes = {
    image?: string;
};

export type BottomRowTypes = {
    image?: string;
};

export type MenuItemProps = {
    src?: string;
    title?: string;
    text?: string;
    price?: string
};

export const HomeHeroContainer = styled(Row)<HeroContainerTypes>(({ image }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 700,
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

export const HeroContainerImage = styled(Image)(({}) => ({
    borderRadius: '50%',
    width: '530px',
    height: '530px',
    margin: 'auto',
}));

export const MainTexts = styled(Typography)(({}) => ({
    padding: '100px',
    margin: 'auto',
}));

export const AddTitleText = styled(Row)(({}) => ({
    color: '#7FAC11FF',
}));

export const CallToActionButton = styled(Button)(({color}) => ({
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

export const PizzaRoundedImage = styled(Image)<ImageProps>(({}) => ({
    borderRadius: '50%',
    width: '200px',
    margin: '0 auto'
}));

export const ImagesContainer2 = styled(Row)(({}) => ({
    backgroundColor: 'rgb(255, 244, 244)',
    padding: '70px 10px',
}));



export const ImageContainer = styled(Space)(({}) => ({
        width: '330px',
        height: '330px',
        margin: 'auto',
    }));

export const PizzaImage = styled(Image)<ImageProps>(({}) => ({
    width: '100%',
    height: '100%',
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

export const HeroContainer = styled(Row)<HeroContainerTypes>(({ image }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 120,
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

export const MenuItemContainer = styled(Row)(({}) => ({
    padding: '40px',
    borderBottom: '1px solid rgb(220,221,222)'
}));

export const BottomRow = styled(Row)<BottomRowTypes>(({ image }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    ':after': {
        content: "''",
        position: 'absolute',
        inset: 0,
        background: '#000',
        opacity: 0.3,
        zIndex: -1,
      },
}));