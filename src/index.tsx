import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Row, Col } from './components';
import { Card } from './components/card';
import { CardContent } from './components/card';
import { CardMedia } from './components/card';
import { GlobalStyle, theme } from './global/Global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <Row>
          <Col span={3}>
            <Card>
              <CardMedia src="data:image/jpeg;base64,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" />
              <CardContent>
                some text some text some some text some text some some text some
                text some
              </CardContent>
              <CardMedia />
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">some text some text some</CardContent>
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </CardContent>
            </Card>
          </Col>
          <Col span={3}>
            <Card>
              <CardContent title="Title">
                <CardMedia src="https://picsum.photos/seed/picsum/200/300" />
                some text some text some
              </CardContent>
            </Card>
          </Col>
        </Row>
      </>
    </ThemeProvider>
  );
};
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
