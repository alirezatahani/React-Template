import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './global/Global';
import Sidebar from './modules/createLanding/sidebar/content/Sidebar';
import RenderComponent from './modules/createLanding/content/renderComponent';
import ComponentsArea from './modules/createLanding/componentsArea/content/ComponentsArea';
import { Col, Row } from './components';

const App: React.FC = () => {
  const [componentToRender, setComponentToRender] = React.useState<string>('');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Row>
        <Col span={3}>
          <Sidebar setComponentToRender={setComponentToRender} />
        </Col>
        <Col span={6}>
          <ComponentsArea>
            <RenderComponent componentToRender={componentToRender} />
          </ComponentsArea>
        </Col>
        <Col span={3}>
          <div style={{ border: '1px solid green' }}></div>
        </Col>
      </Row>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
