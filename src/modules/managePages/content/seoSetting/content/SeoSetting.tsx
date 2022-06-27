import React from 'react';
import {
  Input,
  Col,
  Row,
  Button,
  Typography,
  Space,
  Switch,
  Textarea,
  Alert,
} from '@components/index';
const SeoSetting = () => {
  const [isHideFromMenu, setIsHideFromMenu] = React.useState(false);
  return (
    <div>
      <Typography variant="subtitle2">Page title</Typography>
      <Row>
        <Col span={12}>
          <Input
            scale="lg"
            placeholder="What is your page about ?"
            name="pageTitle"
          />
          <Typography variant="body1">
            A title should be unique for each page. It will appear at the top of
            the browser window or tab, and as a clickable title on the search
            results page.
          </Typography>
        </Col>
      </Row>
      <br />
      <Typography variant="subtitle2">Page Description</Typography>
      <Row>
        <Col span={12}>
          <Textarea
            justifyContent="flex-start"
            align="start"
            width="100%"
            height="100px"
            scale="sm"
            placeholder="Page Description"
            name="pageDescription"
          />
        </Col>
      </Row>
      <Space alignItems="center" spacing={10}>
        <Switch
          size="sm"
          checked={isHideFromMenu}
          onChange={() => setIsHideFromMenu(!isHideFromMenu)}
          color="primary"
        />
        <label>
          Search engines should show this page in search results (mark as index)
        </label>
      </Space>
      <Row>
        <Col span={12}>
          <Alert
            variant="filled"
            type="secondary"
            message="Noindex means that a page shouldn’t be indexed by search engines and therefore shouldn’t be shown on the search engine’s result pages."
          />
        </Col>
      </Row>
    </div>
  );
};

export default SeoSetting;
