import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/menu';

import { ModuleDesign } from './modules/moduleDesign';

import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <ModuleDesign />
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
