import React from 'react';
import { Collapse, Typography, Col, Row, BtnCheckbox } from '@components/index';
import { CardBox } from './content/CardBox';
import {
  ControlPanelItemContainer,
  ControlPanelItemLabel,
} from '@modules/controlPanel/styles/controlPanel.styles';
import {
  HeroButton,
  ButtonWrapper,
  ControlPanelSettingContainer,
} from './ImageControlPanel_styles';
import Select from 'react-select';
import { displayOptions } from '@modules/controlPanel/utils/constants';
import { imageSizeOptions } from './constants';
import { Progress } from '@components/progress';

const ImageControlPanel = () => {
  const [cardState, setCardState] = React.useState([]);

  const boxHandler = () => {
    setCardState((prevState) => [
      ...prevState,
      { id: Math.random(), item: <CardBox /> },
    ]);
  };

  const [state, setState] = React.useState({});

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
            {cardState ? (
              cardState.map((cardBox) => {
                return cardBox.item;
              })
            ) : (
              <CardBox />
            )}

            <ButtonWrapper>
              <HeroButton color="secondary" onClick={boxHandler}>
                Add Image
              </HeroButton>
            </ButtonWrapper>
          </ControlPanelItemContainer>
        </Collapse>
        <Collapse open title="Display Style">
          <ControlPanelItemContainer>
            <Select
              name="displayStyle"
              options={displayOptions}
              onChange={handleChange}
            />
          </ControlPanelItemContainer>
          <ControlPanelItemContainer>
            <Row>
              <Col span={12}>
                <ControlPanelItemLabel>Image Size</ControlPanelItemLabel>
                <BtnCheckbox
                  type="radio"
                  name="imageSize"
                  options={imageSizeOptions}
                />
              </Col>
            </Row>
          </ControlPanelItemContainer>
        </Collapse>
        <Collapse open title="Block Settings">
          test
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default ImageControlPanel;
