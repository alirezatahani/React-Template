import React from 'react';
import { Collapse, Typography, BtnCheckbox, Modal } from '@components/index';
import {
  ControlPanelItemContainer,
  ControlPanelItemLabel,
} from '@modules/controlPanel/styles/controlPanel.styles';
import { ControlPanelSettingContainer } from './imageControlPanel_styles';
import {
  ImageBox,
  HeroImage,
  HeroFormInput,
  HeroButton,
  ModalContent,
  InputFile,
  ButtonAddFile,
  CounterContainer,
  HeroResult,
  WrapperCounter,
  WrapperLabel,
  FormInput,
  HeroSpanLeft,
  HeroSpanRight,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';
import { alignImageOptions } from '@modules/controlPanel/utils/constants';
//end imports
const ImageControlPanel = ({ state, handleChange, setState }: any) => {
  const [image, setImage] = React.useState(null);
  const [isShown, setIsShown] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  //load image

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

  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length > 0) {
      convert2base64(e.target.files[0]);
    }
  };

  //state Handler

  const handleChangeImage = (src: string) => {
    handleChange('file', src);
    setModal(false);
  };
  const handleChangeAltText = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('altText', e.target.value);
  };
  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('width', e.target.value);
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('height', e.target.value);
  };
  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('Url', e.target.value);
  };
  const handleChangeAlignMent = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('alignMent', e.target.value);
  };

  const increaseValue = () => {
    setState((prevState: any) => prevState.width - 1);
  };

  console.log(state.width, 'width');

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
              <ModalContent>
                <Typography
                  variant="h5"
                  style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                  Upload from your Device
                </Typography>
                <InputFile
                  type="file"
                  value={state.files}
                  name="files"
                  onChange={uploadHandler}
                />
                <ButtonAddFile onClick={() => handleChangeImage(image.image)}>
                  Add File
                </ButtonAddFile>
              </ModalContent>
            </Modal>
          </ControlPanelItemContainer>
        </Collapse>
        <Collapse open title="Embed a file form a Url">
          <HeroFormInput
            name="url"
            scale="sm"
            rightAddon="Go"
            placeholder="Enter Image Url"
            value={state.url}
            onChange={handleChangeUrl}
          />
        </Collapse>
        <Collapse open title="alt text">
          <HeroFormInput
            name="altText"
            scale="sm"
            placeholder="alt text"
            value={state.altText}
            onChange={handleChangeAltText}
          />
        </Collapse>
        <Collapse open title="Image window setting">
          <WrapperLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">width</Typography>
            </ControlPanelItemLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">Height</Typography>
            </ControlPanelItemLabel>
          </WrapperLabel>

          <WrapperCounter>
            <CounterContainer>
              <HeroSpanLeft onClick={increaseValue}>+</HeroSpanLeft>
              <HeroResult>
                <FormInput
                  name="width"
                  value={state.width}
                  onChange={handleChangeWidth}
                />
              </HeroResult>
              <HeroSpanRight>-</HeroSpanRight>
            </CounterContainer>

            <CounterContainer>
              <HeroSpanLeft>+</HeroSpanLeft>
              <HeroResult>
                <FormInput
                  name="height"
                  value={state.height}
                  onChange={handleChangeHeight}
                />
              </HeroResult>
              <HeroSpanRight>-</HeroSpanRight>
            </CounterContainer>
          </WrapperCounter>

          <BtnCheckbox
            type="radio"
            name="alignMent"
            onChange={handleChangeAlignMent}
            options={alignImageOptions}
          />
        </Collapse>
      </ControlPanelSettingContainer>
    </React.Fragment>
  );
};

export default ImageControlPanel;
