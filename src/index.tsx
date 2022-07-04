import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './global/Global';
import { routes } from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
