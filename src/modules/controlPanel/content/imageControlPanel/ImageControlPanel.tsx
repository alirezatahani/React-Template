import React from 'react';
import { Collapse, Typography } from '@components/index';
import { CardBox } from './content/CardBox';
import {
  ControlPanelItemContainer,
  ControlPanelSettingContainer,
} from '@modules/controlPanel/styles/controlPanel.styles';
import { HeroButton, ButtonWrapper } from './ImageControlPanel_styles';

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
            <CardBox />

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
