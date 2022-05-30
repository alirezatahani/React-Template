import * as React from 'react';
import { Button } from '../../../components/button/index';
import { Row, Col } from '../../../components/grid/Index';
import { Typography } from '../../../components/typography/index';
import { Jumbotron } from './blank2.styles';

export const Blank2 = () => {
  return (
    <Row>
      <Col xs={12}>
        <Jumbotron>
          <Col xs={3}></Col>
          <Col xs={6}>
            <Row>
              <Col xs={3}></Col>
              <Col xs={5}>
                <Typography variant="h2">Add your title</Typography>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <br />
            <Typography variant="body1">
              Use this space to elaborate on the ideas introduced in the title.
              Connect with your visitors. Include the information that makes the
              most sense for your brand. Try sharing your mission to build
              trust. Or, briefly explain how your product works and the value it
              brings, so they feel compelled to explore your site. The sky is
              the limit.
            </Typography>
            <Row>
              <Col xs={4}></Col>
              <Col xs={5}>
                <Button variant="outlined" size="lg">
                  CALL TO ACTION
                </Button>
              </Col>
              <Col xs={3}></Col>
            </Row>
          </Col>
          <Col xs={3}></Col>
        </Jumbotron>
      </Col>

      <Col xs={12}>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Row>
              <Col xs={8}>{/* Image */}</Col>
              <Col xs={3}>
                <Typography variant="h4">Indroduce your idea</Typography>
                <br />
                <Typography variant="body1">
                  Tell people more about what you do. Use this space to describe
                  your products or services. Highlight their benefits so they
                  feel compelled to click.
                </Typography>
                <br />
                <Button variant="outlined" size="lg">
                  Call To Action
                </Button>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <br />
            <br />
          </Col>

          <Col xs={2}></Col>
        </Row>
      </Col>

      <br />
      <br />
      <Col xs={12}>
        <Row>
          <Col xs={2}></Col>
          <Col xs={8}>
            <Row>
              <Col xs={1}></Col>
              <Col xs={3}>
                <Typography variant="h4">Indroduce your idea</Typography>
                <br />
                <Typography variant="body1">
                  Tell people more about what you do. Use this space to describe
                  your products or services. Highlight their benefits so they
                  feel compelled to click.
                </Typography>
                <br />
                <Button variant="outlined" size="lg">
                  Call To Action
                </Button>
              </Col>
              <Col xs={8}>{/* Image */}</Col>
            </Row>
            <br />
            <br />
          </Col>

          <Col xs={2}></Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}>
            <Row>
              <Col xs={3}></Col>
              <Col xs={5}>
                <Typography variant="h2">Add your title</Typography>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <br />
            <Typography variant="body1">
              Use this space to elaborate on the ideas introduced in the title.
              Connect with your visitors. Include the information that makes the
              most sense for your brand. Try sharing your mission to build
              trust. Or, briefly explain how your product works and the value it
              brings, so they feel compelled to explore your site. The sky is
              the limit.
            </Typography>
            <Row>
              <Col xs={4}></Col>
              <Col xs={5}>
                <Button variant="outlined" size="lg">
                  CALL TO ACTION
                </Button>
              </Col>
              <Col xs={3}></Col>
            </Row>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Col>
    </Row>
  );
};
