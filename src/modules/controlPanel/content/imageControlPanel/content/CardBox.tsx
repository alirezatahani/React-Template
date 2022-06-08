import React from 'react';
import { Collapse, Image } from '@components/index';
import { ImageBox, HeroFormInput } from '../ImageControlPanel_styles';

export const CardBox = () => {
  return (
    <React.Fragment>
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
          <HeroFormInput scale="sm" placeholder="Enter Alternative Text" />
        </Collapse>
      </ImageBox>
    </React.Fragment>
  );
};
