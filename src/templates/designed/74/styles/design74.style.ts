import { Button } from "@components/button";
import { Container } from "@components/container";
import { Col } from "@components/grid";
import { Image } from "@components/image";
import { ImageProps } from "@components/image/content/image_types";
import styled from "styled-components";

export type HeroContainerTypes = {
    image?: string;
};

export type HeroTypes = {
    src?: string;
    title?: string;
    buttonText?: string;
    color?: string;
};

export type FeedbackTypes = {
    name?: string;
    comment?: string;
}

export type ListTypes = {
    titles?: Object;
    image?: string;
    items?:{
        [index: number]: string;
    }
};

export type PriceTypes = {
    months?: string;
    time?: string;
    price?: string;
}

export const HomeHeroContainer = styled(Container)<HeroContainerTypes>(({ image }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    minWidth: '100vw',
 }));

 export const TemplateButton = styled(Button)({
    backgroundColor:'rgb(255, 222, 0)',
    color:'rgb(2, 30, 60)',
    border: 'none',
    padding: '27px 40px',
    borderRadius: '999px',
    fontWeight: 'bold',
    ":hover": {color:'#297EDDFF',
        backgroundColor:'rgb(255, 222, 0)',
        opacity:1,
        border: 'none'
    }
});

export const RoundedImage = styled(Image)<ImageProps>(({}) => ({
    borderRadius:'5%',
    width:'100%',
    height:'auto',
    padding:'5px',
}));

export type PosterTypes = {
    image?: string;
};

export const VerticalLineContainer = styled.div`
    border-left: 2px solid #FFDE00FF;
    height: 150px;
    position: absolute;
    margin-left: -3px;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Poster = styled(Col)<PosterTypes>(({ image }) => ({
    backgroundImage: `url(${image})`,
    height:'615px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
}));
