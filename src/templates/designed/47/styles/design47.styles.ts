import { Button } from "@components/button";
import { Container } from "@components/container";
import { Col, Row } from "@components/grid";
import { Image } from "@components/image";
import { Space } from "@components/space";
import { Typography } from "@components/typography";
import styled from "styled-components";

export const Text = styled(Typography)({
    color: 'rgb(54, 13, 90)',
});

export const RoundedImage = styled(Image)({
    borderRadius: '40px',
});

export type HeroTypes = {
    src?: string;
    title?: string;
    buttonText?: string;
    color?: string;
};

export type HeroContainerTypes = {
    image?: string;
    height?: string;
    backgroundColor?: boolean;
};

export const HeroContainer = styled(Container)<HeroContainerTypes>(({ image, height, backgroundColor}) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: `${height}`,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    minWidth: '100vw',
    ':after': {
        content: "''",
        position: 'absolute',
        inset: 0,
        background: backgroundColor? 'rgb(199, 191, 232)' : null,
        opacity: 0.7,
        zIndex: -1,
      },
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
};

export const RegisterCol = styled(Col)<RegisterColType>(({ imageContainer}) => ({
    padding: imageContainer? 0 : '20px' ,
    borderRadius: imageContainer? '10%' : 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

export const RegisterImage = styled(Image)`
    object-fit: cover;
    @media (min-width: 1024px) {
        height: 280px;
    }
`;

export const ImageSideRow = styled(Row)`
    flex-direction: column;
    background-color: rgb(255, 201, 0);
    padding: 30px;
    margin: 0;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const RegisterBtnContainer = styled.div({
    width: '200px',
     margin: 'auto',
});

export type TemplateButtonTypes = {
    home?: boolean;
};

export const TemplateButton = styled(Button)<TemplateButtonTypes>(({home}) => ({
    backgroundColor: home? 'rgb(54, 13, 90)' : 'rgb(255, 201, 0)',
    color: home? 'rgb(255, 201, 0)' : 'rgb(54, 13, 90)',
    margin: home? '70px 0' : 0,
    border: 'none',
    padding: '27px 40px',
    borderRadius: '999px',
    fontWeight: 'bold',
    ":hover": {
        backgroundColor: home? 'rgb(54, 13, 90)' : 'orange',
        color: home? 'rgb(186, 223, 96)' : 'rgb(54, 13, 90)',
        opacity:1,
        border: 'none'
    }
}));

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

export const FeedbackContent = styled.div`
    background-color: rgb(255, 201, 0);
    border-radius: 25px;
    margin: 100px 200px;
    padding: 60px 100px;
`;

export const Introduce = styled(Row)`
    display: flex;
    height: 100%;
    width: 95%;
    @media (max-width: 1024px) {
        width: '100%;
        height: 100%;
    }
`;

export const HeroContent = styled(Space)({
    height: '100%',
});

export type ClassComponentContainerTypes = {
    background?: string;
}

export const ClassComponentContainer = styled(Row)<ClassComponentContainerTypes>(({background}) => ({
    backgroundColor: background,
    padding: '100px 40px'
}));

export const ClassComponentTexts = styled(Col)({
    padding: '25px',
});

export const ClassComponentListItems = styled.ul({
    paddingLeft: '20px',
});

export const ClassImageContainer = styled(Col)(() =>`
    @media (min-width: 1024px) {
        height: 300px;
    }
`);

export const ClassComponentImage = styled(Image)({
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '40px',
});

export const EventsHeroTexts = styled(Row)`
    display: Flex;
    flex-direction: column
    width: 100%;
    justify-content: center;
    padding: 60px 0;
    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const EventButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const EventsImageContainer = styled(Col)({
    height: '600px',
    position: 'relative',
});

export const EventsImages = styled(Image)({
    position: 'absolute',
    height: '100%',
    objectFit: 'cover',
    padding: '10px',
    borderRadius: '40px'
});
