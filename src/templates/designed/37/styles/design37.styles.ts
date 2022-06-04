import styled from 'styled-components';
import {
  Button,
  Input,
  Container,
  Typography,
  Col,
} from '../../../../components';

export type HeroContainerTypes = {
  image?: string;
};
export const HeroContainer = styled(Container)<HeroContainerTypes>(
  ({ image }) => ({
    background: `url(${image})`,
    backgroundColor: 'red',
    backgroundSize: 'cover',
    height: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minWidth: '100vw',
    zIndex: 1,
    ':after': {
      content: "''",
      position: 'absolute',
      inset: 0,
      background: '#002877',
      opacity: 0.7,
      zIndex: -1,
    },
  })
);
export const HeroForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 6rem',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});
export const HeroTitle = styled(Typography)({
  color: '#fff',
  zIndex: 6,
});
export const HeroText = styled(Typography)({
  color: '#fff',
  zIndex: 6,
  marginTop: '2rem',
});
export const HeroFormInput = styled(Input)({
  border: 0,
  borderBottom: '2px solid #fff',
  backgroundColor: 'transparent',
  borderRadius: 0,
  width: '80vw',
  maxWidth: '1040px',
  '::placeholder': {
    color: '#fff',
  },
  ['&:focus']: {
    outline: 0,
    backgroundColor: '#fff',
    '::placeholder': {
      color: '#333',
    },
  },
});
export const TemplateBtn = styled(Button)({
  backgroundColor: '#1274f6',
  lineHeight: 1,
  padding: '28px 44px',
  borderRadius: 0,
  fontWeight: 'bold',
});
export const TemplateDataSection = styled.section({});
export const TemplateDataCol = styled(Col)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: '1rem',
});
export const IconContainer = styled(Container)({
  minWidth: '100vw',
  backgroundColor: '#f6f6f6',
});
export const PeopleContainer = styled.section({
  minWidth: '100vw',
});
export const PropleDesc = styled(Col)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  rowGap: '1rem',
});
export const SocialSection = styled.section({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem 0',
});
export const SocialItemContainer = styled.div({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  padding: '.1rem',
  border: '1px solid #333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
