import styled from 'styled-components';
import { Typography } from '@components/typography';

export const TemplatesSection = styled.section({
  backgroundColor: '#f5f7fa',
  width: '100%',
  height: '100vh',
});
export const PageTitle = styled(Typography)({
  textAlign: 'center',
});
export const TemlatesContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '1200px',
  flexWrap: 'wrap',
  margin: '0 auto',
  gap: '2rem',
  padding: '2rem',
});
export const mySpan = styled.span({
  fontSize: '16px',
  padding: 0,
});
