import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Drawer } from './components/drawer';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  const [visible2, setVisible] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button onClick={() => setVisible(!visible2)}>Drawer</button>
        </div>

        <Drawer visible={visible2} position="top">
          <p>Text test</p>
        </Drawer>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
