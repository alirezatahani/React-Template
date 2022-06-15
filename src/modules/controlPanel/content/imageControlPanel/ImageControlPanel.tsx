import React from 'react';
import { Collapse, Typography, Input, Button } from '@components/index';
import { ControlPanelItemContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import { ControlPanelSettingContainer } from './imageControlPanel_styles';
import {
  ImageBox,
  HeroImage,
  HeroFormInput,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';

const ImageControlPanel = ({ state, handleChange }: any) => {
  const [image, setImage] = React.useState(null);

  const convert2base64 = (file: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage((prevImage: any) => ({
        ...prevImage,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const uploadHandler = (e: any) => {
    if (e.target.files.length > 0) {
      convert2base64(e.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <ControlPanelSettingContainer>
        <Typography variant="h5">Image</Typography>
        <Collapse open title="Source">
          <ControlPanelItemContainer>
            <ImageBox>
              {image ? (
                <HeroImage src={image.image} />
              ) : (
                <HeroImage src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
              )}
            </ImageBox>
            <Input type="file" name="files" onChange={uploadHandler} />
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
