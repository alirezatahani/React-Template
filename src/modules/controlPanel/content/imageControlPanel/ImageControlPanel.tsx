import React from 'react';
import {
  Collapse,
  Typography,
  Input,
  Button,
  BtnCheckbox,
  Modal,
} from '@components/index';
import { ControlPanelItemContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import { ControlPanelSettingContainer } from './imageControlPanel_styles';
import {
  ImageBox,
  HeroImage,
  HeroFormInput,
  HeroButton,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';
import { alignImageOptions } from '@modules/controlPanel/utils/constants';

const ImageControlPanel = ({ state, handleChange }: any) => {
  const [image, setImage] = React.useState(null);
  const [isShown, setIsShown] = React.useState(false);
  const [modal, setModal] = React.useState(false);

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

  const handleChangeImage = (src: any) => {
    handleChange({
      kind: 'file',
      value: src,
    });
  };
  const handleChangeAltText = (e: any) => {
    handleChange({
      kind: 'altText',
      value: e.target.value,
    });
  };
  const handleChangeUrl = (e: any) => {
    handleChange({
      kind: 'Url',
      value: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <ControlPanelSettingContainer>
        <Typography variant="h5">Image</Typography>
        <Collapse open title="Source">
          <ControlPanelItemContainer>
            <ImageBox
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              {image ? (
                <HeroImage src={image.image} />
              ) : (
                <HeroImage src="https://us-wbe-img.gr-cdn.com/template/website-id-d46691d1-c4bb-4a59-a194-9012099062fd/22eae2c7-8a18-451c-b077-0cc4841f434a.png" />
              )}

              {isShown && (
                <HeroButton
                  variant="outlined"
                  size="lg"
                  onClick={() => setModal(true)}
                >
                  Replace
                </HeroButton>
              )}
            </ImageBox>
            <Modal visible={modal} onClose={() => setModal(false)}>
              <Input
                type="file"
                value={state.files}
                name="files"
                onChange={uploadHandler}
              />
              <Button onClick={() => handleChangeImage(image.image)}>
                Add File
              </Button>
            </Modal>
          </ControlPanelItemContainer>
        </Collapse>
        <Collapse title="Embed a file form a Url">
          <HeroFormInput
            name="url"
            scale="sm"
            rightAddon="Go"
            placeholder="Enter Image Url"
            value={state.url}
            onChange={handleChangeUrl}
          />
        </Collapse>
        <Collapse title="alt text">
          <HeroFormInput
            name="altText"
            scale="sm"
            placeholder="alt text"
            value={state.altText}
            onChange={handleChangeAltText}
          />
        </Collapse>
        <Collapse title="Image window setting">
          <BtnCheckbox
            type="radio"
            name="alignMent"
            onChange={handleChange}
            options={alignImageOptions}
          />
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default ImageControlPanel;
