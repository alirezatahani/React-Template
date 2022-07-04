import styled from 'styled-components';
import { Input, Button } from '@components/index';

export const ImageBox = styled.div(({ theme }) => ({
  width: '100%',
  height: 'auto',
  background: theme.palette.background.paper,
  padding: 20,
  borderRadius: 8,
  boxShadow: '2px 2px 10px -3px #B5A5A2',
  marginBottom: '2rem',
}));

export const HeroFormInput = styled(Input)({
  backgroundColor: 'transparent',
  borderRadius: '4px 0px 0px 4px',
  border: '2px solid #F5F5F5',
});

export const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  width: '100%',
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