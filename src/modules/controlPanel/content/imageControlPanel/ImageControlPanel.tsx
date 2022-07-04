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
  CounterBox,
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
  WrapperCounter,
  WrapperLabel,
  SwitchWrapper,
  SwitchLabel,
  BorderWrapperCounter,
  SelectWrapper,
  MarginBottom,
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';
import {
  alignImageOptions,
  borderOptions,
} from '@modules/controlPanel/utils/constants';
import Select from 'react-select';

//end imports
const ImageControlPanel = ({ state, setState, handleChange }: any) => {
  const [image, setImage] = React.useState(null);
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<boolean>(false);
  const [borderFlag, setBorderFlag] = React.useState<boolean>(false);
  const [radiusFlag, setRadiusFlag] = React.useState<boolean>(false);
  const [shadowFlag, setShadowFlag] = React.useState<boolean>(false);
  const [paddingFlag, setPaddingFlag] = React.useState<boolean>(false);
  const [imageSizeValues, setImageSizeValues] = React.useState([
    { value: 0, position: 'right', name: 'width' },
    { value: 0, position: 'left', name: 'height' },
  ]);
  const [borderRadiusValues, setBorderRadiusValues] = React.useState([
    { value: 0, position: 'top', name: 'RadiusTop' },
    { value: 0, position: 'right', name: 'RadiusRight' },
    { value: 0, position: 'bottom', name: 'RadiusBottom' },
    { value: 0, position: 'left', name: 'RadiusLeft' },
  ]);
  const [paddingValues, setPaddingValues] = React.useState([
    { value: 0, position: 'top', name: 'paddingTop' },
    { value: 0, position: 'right', name: 'paddingRight' },
    { value: 0, position: 'bottom', name: 'paddingBottom' },
    { value: 0, position: 'left', name: 'paddingLeft' },
  ]);

  const {
    bgImageColor,
    imageOpacity,
    PositionX,
    shadowColor,
    PositionY,
    spread,
    blur,
  } = state;

  const handleChangeInputElement = (event: {
    target: { name: string; value: string };
  }) => {
    handleChange(event.target.name, event.target.value);
  };

  const handleChangeShadowColor = (event: {
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
  const handleChangeShadowX = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('PositionX', e.target.value);
  };
  const handleChangeShadowY = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('PositionY', e.target.value);
  };
  const handleChangeShadowSpread = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('spread', e.target.value);
  };
  const handleChangeShadowBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('blur', e.target.value);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('Url', e.target.value);
  };
  const handleChangeAlignMent = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('alignMent', e.target.value);
  };

  const handleChangeImageSizes = (values: any) => {
    setImageSizeValues(values);
  };
  const handleChangeBorderRadius = (values: any) => {
    setBorderRadiusValues(values);
  };
  const handleChangePadding = (values: any) => {
    setPaddingValues(values);
  };

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
        {/* section */}
        <Collapse title="Image window setting">
          <WrapperLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">width</Typography>
            </ControlPanelItemLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">Height</Typography>
            </ControlPanelItemLabel>
          </WrapperLabel>
          <CounterBox
            value={imageSizeValues}
            onChangeMain={handleChangeImageSizes}
          />
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
            {borderFlag ? (
              <>
                <ControlPanelItemContainer>
                  <Row>
                    <Col span={6}>
                      <ControlPanelItemLabel>Size</ControlPanelItemLabel>
                    </Col>
                    <Col span={6}>
                      <ControlPanelItemLabel>Style</ControlPanelItemLabel>
                      <Select name="borderStyle" />
                    </Col>
                  </Row>
                </ControlPanelItemContainer>
              </>
            ) : null}

            <SwitchWrapper>
              <Switch
                checked={radiusFlag}
                onChange={() => setRadiusFlag(!radiusFlag)}
                size="sm"
              />
              <SwitchLabel variant="body1">Radius</SwitchLabel>
            </SwitchWrapper>
            {radiusFlag ? (
              <CounterBox
                value={borderRadiusValues}
                onChangeMain={handleChangeBorderRadius}
                shape="diamond"
              />
            ) : null}
            <MarginBottom>
              <SwitchWrapper>
                <Switch
                  checked={shadowFlag}
                  onChange={() => setShadowFlag(!shadowFlag)}
                  size="sm"
                />
                <SwitchLabel variant="body1">Shadow</SwitchLabel>
              </SwitchWrapper>
            </MarginBottom>

            {shadowFlag ? (
              <>
                <ControlPanelItemLabel>
                  <Typography variant="body1">Position X</Typography>
                </ControlPanelItemLabel>
                <Slider
                  name="PositionX"
                  value={PositionX}
                  onChange={handleChangeShadowX}
                />{' '}
                <ControlPanelItemLabel>
                  <Typography variant="body1">Position Y</Typography>
                </ControlPanelItemLabel>
                <Slider
                  name="PositionY"
                  value={PositionY}
                  onChange={handleChangeShadowY}
                />{' '}
                <ControlPanelItemLabel>
                  <Typography variant="body1">Spread</Typography>
                </ControlPanelItemLabel>
                <Slider
                  name="spread"
                  value={spread}
                  onChange={handleChangeShadowSpread}
                />{' '}
                <ControlPanelItemLabel>
                  <Typography variant="body1">Blur</Typography>
                </ControlPanelItemLabel>
                <Slider
                  name="blur"
                  value={blur}
                  onChange={handleChangeShadowBlur}
                />
                <Row>
                  <Col span={4}>
                    <ControlPanelItemLabel>
                      <Typography variant="body1">shadowColor</Typography>
                    </ControlPanelItemLabel>
                    <ColorPicker
                      value={shadowColor}
                      onChange={handleChangeShadowColor}
                      id="shadowColor"
                      name="shadowColor"
                    />
                  </Col>
                </Row>
              </>
            ) : null}
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

          {paddingFlag ? (
            <CounterBox
              value={paddingValues}
              onChangeMain={handleChangePadding}
              shape="square"
            />
          ) : null}
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
          {radiusFlag ? (
            <CounterBox
              value={borderRadiusValues}
              onChangeMain={handleChangeBorderRadius}
              shape="diamond"
            />
          ) : null}
          <MarginBottom>
            <SwitchWrapper>
              <Switch
                checked={shadowFlag}
                onChange={() => setShadowFlag(!shadowFlag)}
                size="sm"
              />
              <SwitchLabel variant="body1">Shadow</SwitchLabel>
            </SwitchWrapper>
          </MarginBottom>

          {shadowFlag ? (
            <>
              <ControlPanelItemLabel>
                <Typography variant="body1">Position X</Typography>
              </ControlPanelItemLabel>
              <Slider
                name="PositionX"
                value={PositionX}
                onChange={handleChangeShadowX}
              />{' '}
              <ControlPanelItemLabel>
                <Typography variant="body1">Position Y</Typography>
              </ControlPanelItemLabel>
              <Slider
                name="PositionY"
                value={PositionY}
                onChange={handleChangeShadowY}
              />{' '}
              <ControlPanelItemLabel>
                <Typography variant="body1">Spread</Typography>
              </ControlPanelItemLabel>
              <Slider
                name="spread"
                value={spread}
                onChange={handleChangeShadowSpread}
              />{' '}
              <ControlPanelItemLabel>
                <Typography variant="body1">Blur</Typography>
              </ControlPanelItemLabel>
              <Slider
                name="blur"
                value={blur}
                onChange={handleChangeShadowBlur}
              />
              <Row>
                <Col span={4}>
                  <ControlPanelItemLabel>
                    <Typography variant="body1">shadowColor</Typography>
                  </ControlPanelItemLabel>
                  <ColorPicker
                    value={shadowColor}
                    onChange={handleChangeShadowColor}
                    id="shadowColor"
                    name="shadowColor"
                  />
                </Col>
              </Row>
            </>
          ) : null}
        </Collapse>
      </ControlPanelSettingContainer>
    </div>
  );
};

export default ImageControlPanel;
