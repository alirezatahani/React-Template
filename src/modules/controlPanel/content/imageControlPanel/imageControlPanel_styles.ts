import styled from 'styled-components';
import { Input, Button, Image } from '@components/index';

export const ImageBox = styled.div(({ theme }) => ({
  width: '100%',
  height: 190,
  background: theme.palette.background.paper,
  paddingTop: 10,
  borderRadius: 8,
  boxShadow: '2px 2px 10px -3px #B5A5A2',
  transition: '0.4s ease-out',
  position: 'relative',

  ['&:hover']: {
    background: theme.palette.secondary.main,
    color: 'white',
  },
}));

export const HeroImage = styled(Image)(({}) => ({
  width: '100%',
  height: 170,
  ['&:hover']: {
    opacity: '0.1',
  },
}));

export const HeroFormInput = styled(Input)({
  backgroundColor: 'transparent',
  borderRadius: '4px 0px 0px 4px',
  border: '2px solid #F5F5F5',
});

export const HeroButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '41%',
  left: '34%',
  border: `1px solid ${theme.palette.background.paper}`,
  color: 'white',

  ['&:hover']: {
    background: theme.palette.secondary.main,
    color: 'white',
    zIndex: 1,
  },
}));

export const ButtonWrapper = styled.div(({}) => ({
  textAlign: 'center',
}));
export const Wrapper = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItem: 'center',
  cursor: 'pointer',
}));

export const ControlPanelSettingContainer = styled.div(({ theme }) => ({
  width: 360,
  background: theme.palette.background.paper,
  padding: 10,
  overflow: 'scroll',
}));

export const ModalContent = styled.div(({}) => ({
  display: 'grid',
  marginLeft: '11em',
  padding: '8rem',
}));

export const InputFile = styled(Input)(({ theme }) => ({
  ...theme.typography.body1,
  backgroundColor: theme.palette.success.main,
  color: theme.palette.background.paper,
  border: 'none',
  padding: 5,
}));
export const ButtonAddFile = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.background.paper,
  marginLeft: 4,
  border: 'none',
  borderRadius: 4,
}));

export const CounterContainer = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
}));

export const HeroSpanLeft = styled.span(({}) => ({
  width: 35,
  height: 35,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItem: 'center',
  borderRadius: '4px 0px 0px 4px',
}));
export const HeroSpanRight = styled.span(({}) => ({
  width: 35,
  height: 35,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItem: 'center',
  borderRadius: '0px 4px 4px 0px',
}));
export const HeroResult = styled.span(({}) => ({
  width: 120,
  height: 30,
  borderRadius: 4,
}));
export const WrapperLabel = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center',
}));

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItem: 'center',
  marginBottom: '2rem',
}));

export const FormInput = styled(Input)({
  borderRadius: 4,
  border: '2px solid #F5F5F5',
  ' :focus': {
    outline: 'none',
  },
});
