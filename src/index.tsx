import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Row from './components/grid/content/row/Row';
import Col from './components/grid/content/col/Col';
import GlobalStyle from './global/Global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Row columnSpace={{ xs: 2, sm: 5, md: 9, lg: 11 }}>
        <Col xs={6} sm={4} md={12} lg={9}>
          <div
            style={{
              width: '100%',
              height: 100,
              background: 'red',
              fontSize: '2rem',
            }}
          >
            Salam
          </div>
        </Col>
        <Col xs={6} sm={8} md={12} lg={3}>
          <div
            style={{
              width: '100%',
              height: 100,
              background: 'blue',
              fontSize: '2rem',
            }}
          >
            Salam
          </div>
        </Col>
      </Row>
      <br />
      <Row columnSpace={{ xs: 2, sm: 5, md: 9, lg: 11 }}>
        <Col xs={12} sm={6} md={8} lg={10}>
          <div
            style={{
              width: '100%',
              height: 100,
              background: 'red',
              fontSize: '2rem',
            }}
          >
            Salam
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <div
            style={{
              width: '100%',
              height: 100,
              background: 'blue',
              fontSize: '2rem',
            }}
          >
            Salam
          </div>
        </Col>
      </Row>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
