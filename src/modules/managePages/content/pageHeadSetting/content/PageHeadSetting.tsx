import { Textarea, Typography } from '@components/index';
import React from 'react';

const PageHeadSetting = () => {
  return (
    <div>
      <Typography variant="body1">
        Paste the HTML, CSS, JavaScript, or {'<meta/>'} to include in the{' '}
        {'<head>'} element
      </Typography>
      <br />
      <Textarea
        justifyContent="flex-start"
        align="start"
        width="100%"
        height="300px"
        scale="sm"
        placeholder="Content here"
        name="headElement"
      />
    </div>
  );
};

export default PageHeadSetting;
