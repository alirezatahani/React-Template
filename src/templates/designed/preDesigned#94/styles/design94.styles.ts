import styled from 'styled-components';
import {
  Col,
  Button,
  Space,
  Row,
  Typography,
  Container,
} from '../../../../components';

export type HeroContainerTypes = {
  image?: string;
};
export const HeroContainer = styled(Container)<HeroContainerTypes>(
  ({ image }) => ({
    background: `url(${image})`,
    // width: '100%',
    objectFit: 'cover',
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
      background: 'rgb(109, 47, 204)',
      opacity: 0.7,
      zIndex: -1,
    },
  })
);
export const ContactUsContainer = styled(Container)(({}) => ({
  background: 'rgb(109, 47, 204)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  zIndex: 1,
  // paddingBottom: 30,
}));
export const CallToActionRow = styled(Row)(({}) => ({
  width: '100%',
  justifyContent: 'center',
}));
export const SectionImage = styled.img(({}) => ({
  position: 'relative',
  zIndex: 1,
  ':after': {
    content: "''",
    position: 'absolute',
    backgroundColor: 'rgb(109, 47, 204)',
    inset: 0,
    opacity: 0.5,
    zIndex: 19,
  },
}));
