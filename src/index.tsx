import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Row from './components/grid/content/Row';
import Col from './components/grid/content/Col';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Row>
        <Col sm={12} md={6} lg={8}>
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
        <Col sm={12} md={6} lg={4}>
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
      </Row>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
