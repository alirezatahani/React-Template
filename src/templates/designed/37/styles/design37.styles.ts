import styled from 'styled-components';

import {
  Button,
  Input,
  Container,
} from '../../../../components';
export type HeroContainerTypes = {
  image?: string;
};
export const HeroContainer = styled.div<HeroContainerTypes>(({ image }) => ({
  background: `url(${image})`,
  backgroundSize: 'cover',
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
    background: '#002877',
    opacity: 0.7,
    zIndex: -1,
  },
}));
export const HeroForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '2rem 6rem',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
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

export const HeroFormSubmit = styled(Button)({
  backgroundColor: '#1274f6',
  lineHeight: 1,
  padding: '18px 44px',
  borderRadius: 0,
  fontWeight: 'bold',
});

export const TemplateContainer = styled.div({
    maxWidth:"1040px",
    margin:"0 auto"
})
export const IconContainer = styled(Container)({
    width:"100vw",
    backgroundColor:"#f6f6f6",    
})
export const PeopleContainer = styled(Container)({
    width:"100vw",
    ":nth-last-child()":{
        backgroundColor:"#f6f6f6",
    },
})

export const SocialContainer = styled.div({
  display:"flex",
  justifyContent:"center",
  padding:"2rem auto",
  gap:"2rem",
})

export const SocialItemContainer  = styled.div({
  width:"40px",
  height:"40px",
  borderRadius:"50%",
  padding:".1rem",
  border:"1px solid #333",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})