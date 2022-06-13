import styled from 'styled-components';
import { TabPaneProps, TabsProps } from '../content/tab_types';

export const TabSection = styled.section({
  width: '100%',
  padding: '1rem 2rem',
  position: 'relative',
});
export const TabsContainer = styled.div<TabsProps>(({ align }) => ({
  width: '100%',
  display: 'flex',
  justifyContent:
    align === 'center' ? 'center' : align === 'end' ? 'flex-end' : 'flex-start',
  alignItems: 'center',
  gap: '2rem',
  position: 'relative',
}));
export const TabPane = styled.div<TabPaneProps>(({ active, disable }) => ({
  color: active ? '#40a9ff' : 'black',
  borderBottom: active ? '3px solid #40a9ff' : 'none',
  opacity: disable ? '0.5' : '1',
  cursor: disable ? 'not-allowed' : 'pointer',
  padding: '.5rem 0',
  fontWeight: 600,
  fontSize: '17px',
}));
export const TabContentContainer = styled.div({
  width: '100%',
  display: 'flex',
  padding: '1rem 2rem',
});
export const BottomBorderContainer = styled.div({
  width: '100%',
  position: 'absolute',
  top: '63%',
  left: '50%',
  bottom: 0,
  right: 0,
  transform: 'translate(-50%,-50%)',
  paddingRight: 'inherit',
  paddingLeft: 'inherit',
});
export const BottomBorder = styled.div({
  width: '100%',
  padding: ' 0 1rem',
  borderBottom: '1px solid #ccc',
});
