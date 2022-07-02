import React from 'react';
import {
  Collapse,
  Typography,
  BtnCheckbox,
  Switch,
  Modal,
  Slider,
  ColorPicker,
  Row,
  Col,
} from '@components/index';
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
  SwitchWrapper,
  SwitchLabel,
  MarginBottom,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';
import { alignImageOptions } from '@modules/controlPanel/utils/constants';

//end imports
const ImageControlPanel = ({ state, setState, handleChange }: any) => {
  const [image, setImage] = React.useState(null);
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<boolean>(false);
  const [borderFlag, setBorderFlag] = React.useState<boolean>(false);
  const [radiusFlag, setRadiusFlag] = React.useState<boolean>(false);
  const [shadowFlag, setShadowFlag] = React.useState<boolean>(false);
  const [paddingFlag, setPaddingFlag] = React.useState<boolean>(false);

  const { bgImageColor, imageOpacity } = state;

  const handleChangeInputElement = (event: {
    target: { name: string; value: string };
  }) => {
    handleChange(event.target.name, event.target.value);
  };

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
  const handleChangeImageOpacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('imageOpacity', e.target.value);
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

  const handleChangeBorderStyle = (event: {
    kind: string;
    value: string | number;
  }) => {
    handleChange(event.kind, event.value);
  };

  const increaseWidthValue = () => {
    setState((prevState: any) => ({
      ...prevState,
      width: Number(prevState.width) + 1,
    }));
  };

  const decreaseWidthValue = () => {
    setState((prevState: any) => ({
      ...prevState,
      width: Number(prevState.width) - 1,
    }));
  };
  const increaseHeightValue = () => {
    setState((prevState: any) => ({
      ...prevState,
      height: Number(prevState.height) + 1,
    }));
  };
  const decreaseHeightValue = () => {
    setState((prevState: any) => ({
      ...prevState,
      height: Number(prevState.height) - 1,
    }));
  };
  const increaseBorderValue = () => {
    setState((prevState: any) => ({
      ...prevState,
      border: Number(prevState.border) + 1,
    }));
  };

  // const increasePaddingValue = () => {
  //   if (lock) {
  //     setState((prevState: any) => ({
  //       ...prevState,
  //       paddingTop: Number(prevState.paddingTop) + 1,
  //       paddingBottom: Number(prevState.paddingBottom) + 1,
  //       paddingRight: Number(prevState.paddingRight) + 1,
  //       paddingLeft: Number(prevState.paddingLeft) + 1,
  //     }));
  //   } else {
  //     setState((prevState: any) => ({
  //       ...prevState,
  //       paddingTop: Number(prevState.paddingTop) + 1,
  //     }));
  //   }
  // };

  return (
    <div>
      <ControlPanelSettingContainer>
        <Typography variant="h5">Image</Typography>
        <Collapse title="Source">
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
          <WrapperLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">width</Typography>
            </ControlPanelItemLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">Height</Typography>
            </ControlPanelItemLabel>
          </WrapperLabel>

          <MarginBottom>
            <ControlPanelItemLabel>
              <Typography variant="body1">Opacity</Typography>
            </ControlPanelItemLabel>
            <Slider
              name="imageOpacity"
              value={imageOpacity}
              onChange={handleChangeImageOpacity}
            />
          </MarginBottom>

          <WrapperCounter>
            <CounterContainer>
              <HeroSpanLeft onClick={increaseWidthValue}>+</HeroSpanLeft>
              <HeroResult>
                <FormInput
                  name="width"
                  value={state.width}
                  onChange={handleChangeWidth}
                />
              </HeroResult>
              <HeroSpanRight onClick={decreaseWidthValue}>-</HeroSpanRight>
            </CounterContainer>

            <CounterContainer>
              <HeroSpanLeft onClick={increaseHeightValue}>+</HeroSpanLeft>
              <HeroResult>
                <FormInput
                  name="height"
                  value={state.height}
                  onChange={handleChangeHeight}
                />
              </HeroResult>
              <HeroSpanRight onClick={decreaseHeightValue}>-</HeroSpanRight>
            </CounterContainer>
          </WrapperCounter>
          <MarginBottom>
            <BtnCheckbox
              type="radio"
              name="alignMent"
              onChange={handleChangeAlignMent}
              options={alignImageOptions}
            />
          </MarginBottom>

          <Collapse title="advance settings">
            <SwitchWrapper>
              <Switch
                checked={borderFlag}
                onChange={() => setBorderFlag(!borderFlag)}
                size="sm"
              />
              <SwitchLabel variant="body1">Border</SwitchLabel>
            </SwitchWrapper>
            <SwitchWrapper>
              <Switch
                checked={radiusFlag}
                onChange={() => setRadiusFlag(!radiusFlag)}
                size="sm"
              />
              <SwitchLabel variant="body1">Radius</SwitchLabel>
            </SwitchWrapper>
            <SwitchWrapper>
              <Switch
                checked={shadowFlag}
                onChange={() => setShadowFlag(!shadowFlag)}
                size="sm"
              />
              <SwitchLabel variant="body1">Shadow</SwitchLabel>
            </SwitchWrapper>
          </Collapse>
        </Collapse>

        <Collapse open title="Block Settings">
          <Row>
            <Col span={4}>
              <ControlPanelItemLabel>
                <Typography variant="body1">Color</Typography>
              </ControlPanelItemLabel>
              <ColorPicker
                value={bgImageColor}
                onChange={handleChangeInputElement}
                id="bgImageColor"
                name="bgImageColor"
              />
            </Col>
          </Row>

          <SwitchWrapper>
            <Switch
              checked={paddingFlag}
              onChange={() => setPaddingFlag(!paddingFlag)}
              size="sm"
            />
            <SwitchLabel variant="body1">Padding</SwitchLabel>
          </SwitchWrapper>
          <SwitchWrapper>
            <Switch
              checked={borderFlag}
              onChange={() => setBorderFlag(!borderFlag)}
              size="sm"
            />
            <SwitchLabel variant="body1">Border</SwitchLabel>
          </SwitchWrapper>
          <SwitchWrapper>
            <Switch
              checked={radiusFlag}
              onChange={() => setRadiusFlag(!radiusFlag)}
              size="sm"
            />
            <SwitchLabel variant="body1">Radius</SwitchLabel>
          </SwitchWrapper>
          <SwitchWrapper>
            <Switch
              checked={shadowFlag}
              onChange={() => setShadowFlag(!shadowFlag)}
              size="sm"
            />
            <SwitchLabel variant="body1">Shadow</SwitchLabel>
          </SwitchWrapper>
        </Collapse>
      </ControlPanelSettingContainer>
    </div>
  );
};

export default ImageControlPanel;
