
import { Image } from '../../../../../../image/index';
import styled, { css } from 'styled-components';
import { Col, Row } from '../../../../../../grid';
import { Typography } from '../../../../../../typography/index';
import { Button } from '../../../../../../button/index';
import { Space } from '../../../../../../space';

export const Jumbotron = styled(Row)(({}) => ({
  backgroundColor: 'whitesmoke',
  height: 300,
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
    ":hover": {backgroundColor: 'rgb(151, 198, 29)'}
}));

export const PizzaRoundedImage = styled(Image)(({}) => ({
    borderRadius: '50%',
}));

export const PizzaImage = styled(Image)(({}) => ({
    width: '100%',
    higth: '100%',
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

export const ImagesContainer = styled(Row)(({}) => ({
    backgroundColor: '#FFF',
    padding: '70px 10px',
}));

export const ImagesContainer2 = styled(Row)(({}) => ({
    backgroundColor: 'rgb(255, 244, 244)',
    padding: '70px 10px',
}));


export const ImageContainer = styled(Space)(({}) => ({
    width: '330px',
    height: '330px',
    margin: '5px',
    objectFit: 'cover',
}));

export const MainTitleRow = styled(Row)(({}) => ({
    backgroundImage: `url('https://us-wbe-img.gr-cdn.com/user/8a9c5bd8-0d48-4f74-839c-04b16e7e404a/1ede5857-d0b6-4c36-b39d-8666d1f56d47.png')`,
    width: '100%',
    position: 'relative',
    margin: 0,
}));

export const MainTitleImage = styled(Image)(({}) => ({
    borderRadius: '50%',
    width: '530px',
    height: '530px',
}));

export const MainTexts = styled(Typography)(({}) => ({
    padding: '100px',
    margin: 'auto',
    color: 'rgb(236, 18, 18)',
}));