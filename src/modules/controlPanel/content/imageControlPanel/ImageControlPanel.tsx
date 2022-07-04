import React from 'react';
import {
  Collapse,
  Typography,
  BtnCheckbox,
  Switch,
  Modal,
  Counter,
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
} from '@modules/controlPanel/content/imageControlPanel/imageControlPanel_styles';
import {
  alignImageOptions,
  borderOptions,
} from '@modules/controlPanel/utils/constants';
import Select from 'react-select';
import { increaseValue, decreaseValue } from 'utils/counter';

//end imports
const ImageControlPanel = ({ state, setState, handleChange }: any) => {
  const [image, setImage] = React.useState(null);
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const [modal, setModal] = React.useState<boolean>(false);
  const [flags, setFlags] = React.useState([]);
  const [isLocked, setIsLocked] = React.useState<boolean>(false);
  const [values, setValues] = React.useState([
    { value: 0, position: 'right', name: 'paddingRight' },
    { value: 0, position: 'left', name: 'paddingLeft' },
    { value: 0, position: 'top', name: 'paddingTop' },
  ]);

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

  const handleChangeBorderStyle = (event: {
    kind: string;
    value: string | number;
  }) => {
    handleChange(event.kind, event.value);
  };

  const handleClick = (label: string) => {
    const exist = flags.find((flag) => flag === label);
    if (exist) {
      const filteredFlags = flags.filter((item) => item !== label);
      return setFlags(filteredFlags);
    } else {
      setFlags([...flags, label]);
    }
  };

  const handleChangeCounterBox = (values: any) => {
    setValues(values);
  };
  const handleChangePadding = () => {
    values.map((item) => handleChange(item.name, item.value));
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
        <Collapse title="Image window setting">
          <WrapperLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">width</Typography>
            </ControlPanelItemLabel>
            <ControlPanelItemLabel>
              <Typography variant="body1">Height</Typography>
            </ControlPanelItemLabel>
          </WrapperLabel>
          <WrapperCounter>
            <Counter
              onIncrease={() => increaseValue(state, setState, 'width')}
              onDecrease={() => decreaseValue(state, setState, 'width')}
              name="width"
              value={state.width}
              onChange={handleChangeWidth}
            />

            <Counter
              onIncrease={() => increaseValue(state, setState, 'height')}
              onDecrease={() => decreaseValue(state, setState, 'height')}
              name="height"
              value={state.height}
              onChange={handleChangeHeight}
            />
          </WrapperCounter>

          <BtnCheckbox
            type="radio"
            name="alignMent"
            onChange={handleChangeAlignMent}
            options={alignImageOptions}
          />
        </Collapse>

        <Collapse open title="Block Settings">
          <SwitchWrapper>
            <Switch
              size="sm"
              checked={flags.filter((flag) => flag === 'padding').length}
              onChange={() => handleClick('padding')}
            />

            <SwitchLabel variant="body1">Padding</SwitchLabel>
          </SwitchWrapper>
          {flags.find((flag) => flag === 'padding') ? (
            <CounterBox
              onChange={handleChangePadding}
              value={values}
              shape="diamond"
              onChangeMain={handleChangeCounterBox}
              isLocked={isLocked}
              onChangeLock={() => setIsLocked(!isLocked)}
            />
          ) : null}

          <SwitchWrapper>
            <Switch
              size="sm"
              checked={flags.filter((flag) => flag === 'border').length}
              onChange={() => handleClick('border')}
            />

            <SwitchLabel variant="body1">Border</SwitchLabel>
          </SwitchWrapper>

          {flags.find((flag) => flag === 'border') ? (
            <BorderWrapperCounter>
              <Counter />
              <SelectWrapper>
                <Select
                  name="border"
                  options={borderOptions}
                  onChange={handleChangeBorderStyle}
                />
              </SelectWrapper>
            </BorderWrapperCounter>
          ) : null}
        </Collapse>
      </ControlPanelSettingContainer>
    </div>
  );
};

export default ImageControlPanel;
