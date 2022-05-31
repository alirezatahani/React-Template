import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { ModuleDesign } from './modules/moduleDesign';

import { GlobalStyle, theme } from './global/Global';
import { HomePage } from './components/templates/designed/pizzaTemplate/container/pages/HomePage';

const App: React.FC = () => {
  const [fnameVal, setFnameVal] = React.useState<string>('');
  const [lnameVal, setLnameVal] = React.useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ModuleDesign />
        <HomePage />
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
