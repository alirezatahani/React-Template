import styled from 'styled-components';
import {
  Col,
  Input,
  Button,
  Textarea,
  Typography,
  Container
} from '@components/index';
import { InputLabel } from '../../../../components/input/styles/Input.styles';

export type HeroContainerTypes = {
  image?: string;
  backgroundFullImage?: boolean;
};
export const HeroContainer = styled(Container)<HeroContainerTypes>(
  ({ image, backgroundFullImage }) => ({
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: backgroundFullImage ? '100vh' : 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    minWidth: '100vw',
  })
);
export const TemplateContainer = styled(Container)({
  maxWidth: '1180px',
  padding: '2rem 1rem',
});
export type TemplateDataDivTypes = {
  width?: string;
  backgroundColor?: string;
  padding?: string;
  display?: string;
  height?: string;
};
export const TemplateDataDiv = styled.div<TemplateDataDivTypes>(
  ({ width, backgroundColor, padding, display, height }) => ({
    width: width,
    height: height ? height : 'inherit',
    display: display === 'flex' ? 'flex' : 'inherit',
    maxWidth: '100%',
    margin: '0 auto ',
    padding: padding ? padding : 0,
    backgroundColor: backgroundColor,
  })
);
export type TemplateDataColType = {
  align?: string;
  width?: string;
};
export const TemplateDataCol = styled(Col)<TemplateDataColType>(
  ({ align }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: `${align}`,
    justifyContent: 'center',
    rowGap: '1rem',
  })
);
export const TemplateBtn = styled(Button)({
  backgroundColor: '#1274f6',
  lineHeight: 1,
  padding: '28px 44px',
  borderRadius: '5px',
  fontWeight: 'bold',
  ':hover': {
    backgroundColor: '#202730',
  },
});
export const TemplateMain = styled.section({});
export const TemplateWideContainer = styled(Container)({
  minWidth: '100vw',
  backgroundColor: '#f6f6f6',
});
export const TemplateInputLabel = styled(InputLabel)({
  marginBottom: '5px',
  fontSize: '18px',
});
export const TemplateInput = styled(Input)({
  width: '100%',
  border: '1px solid #333',
  padding: '25px 5px',
  borderRadius: 5,
  ['&:focus']: {
    outline: 0,
  },
});
export const TemplateTextarea = styled(Textarea)({
  width: '100%',
  border: '1px solid #333',
  padding: '25px 5px',
  borderRadius: 5,
  overflow: 'hidden',
  ['&:focus']: {
    outline: 0,
  },
});
export type TemplateTypo = {
  size?: string;
  lineHeight?: number;
};
export const TemplateTypo = styled(Typography)<TemplateTypo>(
  ({ size, lineHeight }) => ({
    fontSize: size ? size : 'inherit',
    textAlign: 'center',
    lineHeight: lineHeight ? lineHeight : 'inherit',
  })
);
