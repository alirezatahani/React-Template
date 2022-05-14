import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Row, Col } from './components/grid/Index';
import { Input } from './components/input/index';
import GlobalStyle from './global/Global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Input size="20px" placeholder="First Input" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Input placeholder="First Input" />
        </Col>
      </Row>
    </>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
