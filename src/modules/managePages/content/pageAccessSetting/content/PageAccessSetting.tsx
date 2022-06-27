import { Col, IconBox, Row, Typography } from '@components/index';
import React from 'react';
import { FiLock, FiUnlock } from 'react-icons/fi';
import { GiCombinationLock } from 'react-icons/gi';

const PageAccessSetting = () => {
  return (
    <div>
      <Typography variant="h5">Who can access this page ?</Typography>
      <br />
      <Row spacing={20}>
        <Col span={4}>
          <IconBox
            isActive={true}
            icon={<FiUnlock size={35} />}
            title="Everyone"
          />
        </Col>
        <Col span={4}>
          <IconBox icon={<GiCombinationLock size={35} />} title="Everyone" />
        </Col>
        <Col span={4}>
          <IconBox icon={<FiLock size={35} />} title="Everyone" />
        </Col>
      </Row>
    </div>
  );
};

export default PageAccessSetting;
