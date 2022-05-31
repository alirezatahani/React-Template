import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/content/Footer';
import { ModuleDesign } from './modules/moduleDesign';
import { GlobalStyle, theme } from './global/Global';
import { HomePage } from './components/templates/designed/pizzaTemplate/container/pages/HomePage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ModuleDesign />
        <HomePage />
        <Footer />
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
