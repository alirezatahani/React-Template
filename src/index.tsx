import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './global/Global';

import Sidebar from './modules/sidebar/content/Sidebar';
import Wrapper from './modules/wrapper/content/Wrapper';
import { Alert, Button, Input, Typography } from './components';
import RenderComponent from './modules/render-component/content/RenderComponent';
import ComponentsArea from './modules/components-area/content/ComponentsArea';

const App: React.FC = () => {
  const KeysToComponentMap = {
    button: Button,
    alert: Alert,
    typography: Typography,
    input: Input,
  };

  const [componentToRender, setComponentToRender] = React.useState<any>(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Sidebar setComponentToRender={setComponentToRender} />

        {/* Components Area */}
        <ComponentsArea>
          <RenderComponent
            KeysToComponentMap={KeysToComponentMap}
            componentToRender={componentToRender}
          />
        </ComponentsArea>

        {/* Props Handling Area */}
        <div style={{ border: '1px solid green' }}></div>
      </Wrapper>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
