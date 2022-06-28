import React from 'react';
import { Collapse, Typography, Image } from '@components/index';
import { ControlPanelItemContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import {
  HeroButton,
  ButtonWrapper,
  ControlPanelSettingContainer,
} from './galleryControlPanel_styles';
import Select from 'react-select';
import { displayOptions } from '@modules/controlPanel/utils/constants';
import {
  ImageBox,
  HeroFormInput,
  Wrapper,
} from '@modules/controlPanel/content/galleryControlPanel/galleryControlPanel_styles';
import { FaMinus } from 'react-icons/fa';
import { RemoveFromArray, addToArray } from 'utils/dynamicForm';

const GalleryControlPanel = () => {
  const [state, setState] = React.useState({});

  const [gallery, setGallery] = React.useState([]);

  const handleFormChange = (index: any, event: any) => {
    let data = [...gallery];
    data[index][event.target.name] = event.target.value;
    setGallery(data);
  };

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
            <ButtonWrapper>
              {gallery.map((item, index) => {
                return (
                  <div key={index}>
                    <ImageBox>
                      <Wrapper>
                        <Typography variant="body1">Image#{item.id}</Typography>
                        <FaMinus
                          size={13}
                          onClick={() =>
                            RemoveFromArray(item.id, gallery, setGallery)
                          }
                        />
                      </Wrapper>

                      <Image
                        shape="rounded"
                        src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png"
                      />
                      <Collapse title="Embed a file from a Url">
                        <HeroFormInput
                          name="url"
                          scale="sm"
                          rightAddon="Go"
                          placeholder="Enter Image Url"
                          value={item.url}
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Collapse>
                      <Collapse title="alt text">
                        <HeroFormInput
                          name="altText"
                          scale="sm"
                          placeholder="Enter Alternative Text"
                          value={item.altText}
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </Collapse>
                    </ImageBox>
                  </div>
                );
              })}
              <HeroButton
                color="secondary"
                onClick={() => addToArray(gallery, setGallery)}
              >
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
        </Collapse>
        <Collapse open title="Block Settings">
          coming soon
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default GalleryControlPanel;
