import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Row, Col } from './components/grid/Index';
import GlobalStyle from './global/Global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Row spacing={{ xs: 2, sm: 5, md: 9, lg: 8 }}>
        <Col xs={10} sm={10} md={10} lg={10}>
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
        <Col xs={1} sm={1} md={1} lg={1}>
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
        <Col xs={1} sm={1} md={1} lg={1}>
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
      <Row spacing={8}>
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
