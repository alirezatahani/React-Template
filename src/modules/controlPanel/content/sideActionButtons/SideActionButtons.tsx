import { Space, Button } from '@components/index';
import { SideButtonsContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import { ImTree } from 'react-icons/im';
import React, { SetStateAction } from 'react';

const SideActionButtons = ({ setSelected }: SetStateAction<any>) => {
  return (
    <SideButtonsContainer>
      <Space spacing={10} direction="vertical" align="start">
        <Button size="lg" color="primary" shape="rounded">
          +
        </Button>
        <Button size="lg" color="danger" shape="rounded">
          G
        </Button>
        <Button
          onClick={() => setSelected({ type: 'pages' })}
          size="lg"
          color="success"
          shape="rounded"
        >
          <ImTree />
        </Button>
      </Space>
    </SideButtonsContainer>
  );
};

export default SideActionButtons;
