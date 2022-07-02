import styled from 'styled-components';
import {
  TabPaneProps,
  TabsProps,
} from '../content/tab_types';

export const TabSection = styled.section({
  width: '100%',
  padding: '1rem 2rem',
});
export const TabsContainer = styled.div<TabsProps>(({ align }) => ({
  width: '100%',
  display: 'flex',
  justifyContent:
  align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'flex-start',
  alignItems: 'center',
  gap: '2rem',
}));
export const TabPane = styled.div<TabPaneProps>(({ active, disable }) => ({
  color: active ? '#40a9ff' : 'black',
  borderBottom: active ? '4px solid #40a9ff' : 'none',
  opacity: disable ? '0.5' : '1',
  cursor: disable ? 'not-allowed' : 'pointer',
  padding: '.5rem 0',
  fontWeight: 600,
  fontSize: '17px',
}));
export const TabContentContainer = styled.div(
  {
    width: '100%',
    padding: '2rem',
  }
);
export const BottomBorderContainer = styled.div({
  width: '100%',
  height: 0,
  position: 'absolute',
  left: '50%',
  bottom: '9px',
  right: 0,
  transform: 'translate(-50%,-50%)',
  paddingRight: 'inherit',
  paddingLeft: 'inherit',
});
export const BottomBorder = styled.div({
  width: '100%',
  padding: ' 0 1rem',
  outline: '1px solid #ccc',
});
export const TabsHead = styled.div({
  width:"100%",
  position: 'relative',
});
