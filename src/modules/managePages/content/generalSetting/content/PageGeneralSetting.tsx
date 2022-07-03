import React from 'react';
import {
  Input,
  Col,
  Row,
  Button,
  Typography,
  Space,
  Switch,
} from '@components/index';

const PageGeneralSetting = () => {
  const [isEditingUrl, setIsEditingUrl] = React.useState(true);
  const [isEnabledPage, setIsEnabledPage] = React.useState(true);
  const [isHideFromMenu, setIsHideFromMenu] = React.useState(false);
  return (
    <div>
      <Typography variant="subtitle2">Page name</Typography>
      <Row>
        <Col span={12}>
          <Input scale="lg" placeholder="Page name" name="pageName" />
        </Col>
      </Row>
      <br />
      <Typography variant="subtitle2">Page url</Typography>
      <Row>
        <Col span={11}>
          <Input
            leftAddon="https://myDomein.com/"
            scale="lg"
            placeholder="Page name"
            name="pageName"
            disabled={isEditingUrl}
          />
        </Col>
        <Col span={1}>
          <Button onClick={() => setIsEditingUrl(!isEditingUrl)} variant="text">
            Edit
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Space direction="vertical">
            <Space alignItems="center" spacing={10}>
              <Switch
                size="sm"
                checked={isEnabledPage}
                onChange={() => setIsEnabledPage(!isEnabledPage)}
                color="primary"
              />
              <label>Enable page</label>
            </Space>
            <Space alignItems="center" spacing={10}>
              <Switch disabled size="sm" color="primary" />
              <label>Schedule page</label>
            </Space>
            <Space alignItems="center" spacing={10}>
              <Switch
                size="sm"
                checked={isHideFromMenu}
                onChange={() => setIsHideFromMenu(!isEnabledPage)}
                color="primary"
              />
              <label>Hide from menu</label>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default PageGeneralSetting;
