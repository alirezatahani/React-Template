import { Space, Button } from '@components/index';
import { SideButtonsContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import React from 'react';

const SideActionButtons = () => {
  return (
    <SideButtonsContainer>
      <Space spacing={10} direction="vertical" align="start">
        <Button size="lg" color="primary" shape="rounded">
          +
        </Button>
        <Button size="lg" color="danger" shape="rounded">
          G
        </Button>
        <Button size="lg" color="warning" shape="rounded">
          A
        </Button>
      </Space>
    </SideButtonsContainer>
  );
};

export default SideActionButtons;