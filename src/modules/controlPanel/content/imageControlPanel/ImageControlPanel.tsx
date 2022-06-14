import React from 'react';
import { Collapse, Typography, Image } from '@components/index';
import { ControlPanelItemContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import { ControlPanelSettingContainer } from './imageControlPanel_styles';
import {
  ImageBox,
  HeroFormInput,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';

const ImageControlPanel = () => {
  return (
    <React.Fragment>
      <ControlPanelSettingContainer>
        <Typography variant="h5">Image</Typography>
        <Collapse open title="Source">
          <ControlPanelItemContainer>
            <ImageBox>
              <Image
                shape="rounded"
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png"
              />
            </ImageBox>
          </ControlPanelItemContainer>
        </Collapse>

        <Collapse title="Embed a file form a Url">
          <HeroFormInput
            name="url"
            scale="sm"
            rightAddon="Go"
            placeholder="Enter Image Url"
          />
        </Collapse>
        <Collapse title="alt text">
          <HeroFormInput name="altText" scale="sm" placeholder="alt text" />
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default ImageControlPanel;
