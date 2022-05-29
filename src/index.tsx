import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import {
  Input,
  Col,
  Row,
  Button,
  Typography,
  Divider,
  Alert,
  Avatar,
  Badge,
} from './components';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [fnameVal, setFnameVal] = React.useState<string>('');
  const [lnameVal, setLnameVal] = React.useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
