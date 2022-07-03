import { Button } from '@components/button';
import { Typography } from '@components/typography';
import React, { useState, useEffect } from 'react';
import { FiImage } from 'react-icons/fi';
import { AiOutlineStop } from 'react-icons/ai';
import {
  UploadDropZoonContainer,
  DropZoonInput,
  PreviewImage,
  MessageContainer,
  DropZoonContent,
} from '../styles/uploadArea.styles';
import { UploadAreaTypes } from './uploadArea_types';

const messageTypeIcons: any = {
  error: <AiOutlineStop color="#fff" size={50} />,
};

const UploadArea: React.FC<UploadAreaTypes> = ({
  onUpload,
  formats,
  count,
}: UploadAreaTypes) => {
  const [message, setMessage] = React.useState({
    show: false,
    text: null,
    type: null,
  });
  const showMessage = (text: string, type: string, timeout: number) => {
    setMessage({
      show: true,
      text,
      type,
    });

    setTimeout(
      () =>
        setMessage({
          show: false,
          text: null,
          type: null,
        }),
      timeout
    );
  };
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');
  const drop = React.useRef(null);

  React.useEffect(() => {
    if (drop.current) {
      drop.current.addEventListener('dragover', handleDragOver);
      drop.current.addEventListener('drop', handleDrop);
    }
    return () => {
      if (drop.current) {
        drop.current.removeEventListener('dragover', handleDragOver);
        drop.current.removeEventListener('drop', handleDrop);
      }
    };
  }, []);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];

    // check if the provided count prop is less than uploaded count of files
    if (count && count < files.length) {
      showMessage(
        `only ${count} file${count !== 1 ? 's' : ''} can be uploaded at a time`,
        'error',
        2000
      );
      return;
    }

    // check if some uploaded file is not in one of the allowed formats
    if (
      formats &&
      files.some(
        (file) =>
          !formats.some((format: string) =>
            file.name.toLowerCase().endsWith(format.toLowerCase())
          )
      )
    ) {
      showMessage(
        `Only following file formats are acceptable:\n ${formats.join(', ')}`,
        'error',
        2000
      );
      return;
    }

    if (files && files.length) {
      onUpload(files);
      setSelectedFile(files[0]);
    }
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const uploadHandler = (event: any) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(event.target.files[0]);
    const file = event.target.files[0];
    onUpload([file]);
  };

  return (
    <>
      <UploadDropZoonContainer ref={drop}>
        {!selectedFile && (
          <>
            <DropZoonContent>
              <FiImage color="#bbbbbb" size={50} />
              <Typography variant="h5">Drag and drop a file here</Typography>
            </DropZoonContent>
            <Typography variant="subtitle1">
              You can use :
              {formats.map((item: string, index: number) => {
                return (
                  <span>
                    {index === formats.length - 1 ? item : item + ' , '}
                  </span>
                );
              })}
            </Typography>

            <Button variant="text" color="primary">
              Browse your computer
            </Button>
          </>
        )}

        {message.show && (
          <MessageContainer type={message.type}>
            {messageTypeIcons[message.type]}
            <Typography variant="h4">{message.text}</Typography>
          </MessageContainer>
        )}

        <DropZoonInput
          onChange={uploadHandler}
          type="file"
          accept={formats.join(',')}
        />
        {selectedFile && <PreviewImage src={preview} />}
      </UploadDropZoonContainer>
    </>
  );
};

export default UploadArea;
