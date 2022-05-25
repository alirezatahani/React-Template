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
import { Drawer } from './components/drawer';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [visible2, setVisible] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <button onClick={() => setVisible(!visible2)}>Drawer</button>

        <Drawer onClose={() => console.log('closing')} visible={visible2}>
          <p>Text test</p>
        </Drawer>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
