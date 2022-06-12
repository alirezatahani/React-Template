import { Button } from "@components/button";
import { Container } from "@components/container";
import { Col, Row } from "@components/grid";
import { Typography } from "@components/typography";
import styled from "styled-components";

export type HeroContainerTypes = {
    image?: string;
    height?: string
};


export type SalamType = {
    image?: string;
    height?: string
};
export const Salam = styled(Col)<SalamType>(({ image }) => ({
    backgroundImage: `url(${image})`,
    height: '100%',
}));

export type HeroTypes = {
    src?: string;
    title?: string;
    buttonText?: string;
    color?: string;
};

export const HeroContainer = styled(Container)<HeroContainerTypes>(({ image, height }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: `${height}`,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    minWidth: '100vw',
}));

export const HeroItems = styled(Col)({
    margin: '100px',
});

export const HeroTitlesSection = styled(Col)({
    padding: '10px 20px',
});

export const HeroTitlestext = styled(Row)({
    padding: '20px',
});

export const SubTitle = styled(Typography)({
    margin: '60px 0',
    color: 'rgb(54, 13, 90)',
});

export type RegisterColType = {
    imageContainer?: boolean;
    column1?: boolean;
    column2?: boolean;
    column3?: boolean;
};

export const RegisterCol = styled(Col)<RegisterColType>(({ imageContainer,column1, column2, column3 }) => ({
    padding: imageContainer? 0 : '20px' ,
    borderRadius: imageContainer? '10%' : 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const RegisterBtnContainer = styled.div({
    width: '200px',
     margin: 'auto',
});


export const TemplateButton = styled(Button)({
    backgroundColor:'rgb(54, 13, 90)',
    color:'rgb(255, 201, 0)',
    border: 'none',
    padding: '27px 40px',
    borderRadius: '999px',
    fontWeight: 'bold',
    ":hover": {
        color:'rgb(186, 223, 96)',
        backgroundColor:'rgb(54, 13, 90)',
        opacity:1,
        border: 'none'
    }
});

export const Date = styled(Col)({
    display: 'flex',
    flexDirection: 'column',
    margin: '60px 0',
    color: 'rgb(54, 13, 90)',
    float: 'right',
    marginRight: '20px'
});

export type PosterTypes = {
    image?: string;
};

export const Poster = styled.div<PosterTypes>(({ image }) => ({
    backgroundImage: `url(${image})`,
    height:'615px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    ':after': {
        content: "''",
        position: 'absolute',
        inset: 0,
        background: 'rgb(255, 201, 0)',
        opacity: 0.4,
        zIndex: -1,
      },
}));

export type IntroduseTypes = {
    image?: string;
};

export const Introduce = styled.div<IntroduseTypes>(({ image }) => ({
    background: 'rgb(255, 201, 0)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    zIndex: 1,
    width: '90%',
    height: '100%',
    borderRadius: '25px',
    ':after': {
        content: "''",
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${image})`,
        opacity: 1,
        width: '75%',
        zIndex: -1,
        borderRadius: '25px 0 0 25px'
      },
}));