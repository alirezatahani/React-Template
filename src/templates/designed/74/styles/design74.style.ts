import { Button } from "@components/button";
import { Container } from "@components/container";
import { Col, Row } from "@components/grid";
import { Image } from "@components/image";
import { ImageProps } from "@components/image/content/image_types";
import styled from "styled-components";

export type HeroContainerTypes = {
    image?: string;
};

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

export const HomeImage = styled(Image)<ImageProps>(({}) => ({
    borderRadius:'5%',
    width:'100%',
    height:'auto',
    padding:'5px',
}));

export const HomePagePoster = styled(Col)(({}) => ({
    backgroundImage:'url(https:us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/d797e744-48d2-49d8-8f6d-87ab172237a2.png)',
    height:'615px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
}));
