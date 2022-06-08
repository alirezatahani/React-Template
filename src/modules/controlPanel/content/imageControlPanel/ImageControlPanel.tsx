import React from 'react';
import { Collapse, Typography, Image } from '@components/index';

import {
  ControlPanelItemContainer,
  ControlPanelSettingContainer,
} from '@modules/controlPanel/styles/controlPanel.styles';
import {
  ImageBox,
  HeroFormInput,
  HeroButton,
  ButtonWrapper,
} from './ImageControlPanel_styles';

const ImageControlPanel = () => {
  const [state, setState] = React.useState({
    fontType: '',
    fontFamily: '',
    fontSize: '',
    fontDecoration: '',
    textAlign: '',
    fontColor: '',
  });

  const handleChange = (evt: any) => {
    const getLabel = evt.kind ? evt.kind : evt.target.name;
    const getValue = evt.value ? evt.value : evt.target.value;
    setState({
      ...state,
      [getLabel]: getValue,
    });
  };

  return (
    <React.Fragment>
      <ControlPanelSettingContainer>
        <Typography variant="h5">Gallery</Typography>
        <Collapse open title="Images">
          <ControlPanelItemContainer>
            <ImageBox>
              <Image
                shape="rounded"
                src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png"
              />
              <Collapse title="Embed a file from a Url">
                <HeroFormInput
                  scale="sm"
                  rightAddon="Go"
                  placeholder="Enter Image Url"
                />
              </Collapse>
              <Collapse title="alt text">
                <HeroFormInput
                  scale="sm"
                  placeholder="Enter Alternative Text"
                />
              </Collapse>
            </ImageBox>

            <ButtonWrapper>
              <HeroButton color="secondary">Add Image</HeroButton>
            </ButtonWrapper>
          </ControlPanelItemContainer>
        </Collapse>
        <Collapse open title="Display Style">
          test
        </Collapse>
        <Collapse open title="Block Settings">
          test
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default ImageControlPanel;
