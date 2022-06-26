import styled from 'styled-components';
import { Input, Button, Image, Typography } from '@components/index';

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
  alignItems: 'center',
  cursor: 'pointer',
}));

export const ControlPanelSettingContainer = styled.div(({ theme }) => ({
  width: 360,
  background: theme.palette.background.paper,
  padding: 10,
  overflow: 'scroll',
  height: '100vh',
}));

export const ModalContent = styled.div(({}) => ({
  textAlign: 'center',
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
  alignItems: 'center',
}));

export const HeroSpanLeft = styled.span(({}) => ({
  width: 30,
  height: 30,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '4px 0px 0px 4px',
}));
export const HeroSpanRight = styled.span(({}) => ({
  width: 30,
  height: 30,
  backgroundColor: '#F5F5F5',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '0px 4px 4px 0px',
}));
export const HeroResult = styled.span(({}) => ({
  width: 60,
  height: 30,
}));
export const WrapperLabel = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}));

export const WrapperCounter = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '2rem',
}));

export const BorderWrapperCounter = styled(WrapperCounter)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: '2rem',
  marginTop: '1rem',
});

export const FormInput = styled(Input)({
  border: '1px solid #F5F5F5',
  height: 30,
  textAlign: 'center',
  borderRadius: 0,
  ' :focus': {
    outline: 'none',
  },
});
export const SwitchWrapper = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));
export const SwitchLabel = styled(Typography)(({}) => ({
  marginLeft: 8,
}));

export const PaddingContainer = styled.div(({ theme }) => ({
  position: 'relative',
  width: 200,
  height: 100,
  border: `1px dashed ${theme.palette.disabled.backgroundColor}`,
  margin: '0px auto',
  borderRadius: 4,
  marginBottom: '2rem',
  marginTop: '2rem',
}));
export const PaddingTopStyled = styled.div(({}) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: -16,
}));
export const PaddingBottomStyled = styled.div(({}) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: -48,
}));
export const PaddingRightStyled = styled.div(({}) => ({
  position: 'absolute',
  left: -62,
  bottom: 0,
}));
export const PaddingLeftStyled = styled.div(({}) => ({
  position: 'absolute',
  right: -62,
  bottom: 0,
}));
export const LockBox = styled.div(({}) => ({
  position: 'absolute',
  left: 93,
  top: 40,
}));
export const SelectWrapper = styled.div(({}) => ({
  marginLeft: 14,
}));
