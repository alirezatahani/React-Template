import * as React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './global/Global';
import Example from '../Pages/example';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <DndProvider backend={HTML5Backend}>
          <button onClick={() => {}}>Press </button>
          <Example />
        </DndProvider>
      </>
    </ThemeProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
