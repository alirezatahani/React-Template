import { Typography, Row, Col, UploadArea } from '@components/index';
import React, { useRef, useState } from 'react';

const SocialMediaSetting = () => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const onUpload = (files: any) => {
    console.log(files);
  };
  return (
    <div>
      <Typography variant="h5">Social media image</Typography>
      <Typography variant="subtitle1">
        When people share your website on Facebook, Instagram, or Twitter, this
        image will be displayed in their posts
      </Typography>
      <Row>
        <Col span={12}>
          <UploadArea
            onUpload={onUpload}
            count={1}
            formats={['jpg', 'png', 'svg', 'jpeg']}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SocialMediaSetting;
