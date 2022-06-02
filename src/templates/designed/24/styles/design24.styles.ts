import styled from 'styled-components';
import {
  Button,
  Input,
  Container,
  Col,
} from '../../../../components';

export type HeroContainerTypes = {
  image?: string;
};
export const HeroContainer = styled(Container)<HeroContainerTypes>(({ image }) => ({
  background: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition:"center center",
  height: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
  minWidth:"100vw",
}));
export type TemplateDataDivTypes = {
  width?: string;
};
export const TemplateDataDiv = styled.div<TemplateDataDivTypes>(({width})=>({
    maxWidth: width? width:"100%",
    margin:"0 auto ",
    fontSize:"18px",
    padding:"1rem",
}))
export type TemplateDataColType = {
  align?:string;
}
export const TemplateDataCol= styled(Col)<TemplateDataColType>(({align})=>({
  display:"flex",
  flexDirection:"column",
  alignItems:`${align}`,
  justifyContent:"center",
  rowGap:"1rem",
}))
export const TemplateBtn = styled(Button)({
  backgroundColor: '#1274f6',
  lineHeight: 1,
  padding: '28px 44px',
  borderRadius: "5px",
  fontWeight: 'bold',
});
export const TemplateMain = styled.section({
})
export const TemplateWideContainer = styled(Container)({
  minWidth: '100vw',
  backgroundColor:"#f6f6f6",
});