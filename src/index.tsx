import * as React from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './global/Global';

import Sidebar from './modules/sidebar/content/Sidebar';
import Wrapper from './modules/wrapper/content/Wrapper';
import RenderComponent from './modules/render-component/content/RenderComponent';
import ComponentsArea from './modules/components-area/content/ComponentsArea';

const App: React.FC = () => {
  const [componentToRender, setComponentToRender] = React.useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Sidebar setComponentToRender={setComponentToRender} />

        {/* Components Area */}
        <ComponentsArea>
          <RenderComponent componentToRender={componentToRender} />
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
