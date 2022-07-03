import { Image } from '@components/image';
import styled from 'styled-components';
import { MessageContainerProps } from '../content/uploadArea_types';

export const UploadDropZoonContainer = styled.div(({ theme }) => ({
  backgroundColor: 'rgb(248, 251, 252)',
  border: '1px dashed rgb(204, 204, 204)',
  borderRadius: 4,
  maxWidth: 500,
  textAlign: 'center',
  width: '100%',
  height: '100%',
  minHeight: 240,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '2.1875rem',
  cursor: 'pointer',
  transition: ' border-color 300ms ease-in-out',
}));
export const DropZoonInput = styled.input(({ theme }) => ({
  opacity: 0,
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  border: '1px solid blue',
}));
export const DropZoonContent = styled.div(({ theme }) => ({
  paddingBottom: 10,
}));
export const PreviewImage = styled(Image)(({ theme }) => ({
  width: '70%',
  height: 'auto',
  borderRadius: 7,
}));
export const MessageContainer = styled.div<MessageContainerProps>(
  ({ theme, type }) => ({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      type === 'error'
        ? theme.palette.danger.main
        : theme.palette.greyScale.main,
    color: theme.palette.common.white,
    ['> *']: {
      color: theme.palette.common.white,
    },
  })
);
