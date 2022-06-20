import React from 'react';
import { Typography } from '@components/typography';
import { ControlPanelSettingContainer } from '@modules/controlPanel/styles/controlPanel.styles';
import { GoGrabber } from 'react-icons/go';
import { FiMoreVertical } from 'react-icons/fi';
import {
  PageItem,
  PageTitleContainer,
  PageSettingDropDown,
  GrabIcon,
} from '../styles/managePages.styles';

const ManagePages = () => {
  return (
    <ControlPanelSettingContainer>
      <Typography variant="h5">Pages</Typography>
      <br />
      <PageItem>
        <PageTitleContainer>
          <GrabIcon>
            <GoGrabber />
          </GrabIcon>
          <span>Home</span>
        </PageTitleContainer>
        <PageSettingDropDown>
          <FiMoreVertical />
        </PageSettingDropDown>
      </PageItem>
      <PageItem>
        <PageTitleContainer>
          <GrabIcon>
            <GoGrabber />
          </GrabIcon>
          <span>Home</span>
        </PageTitleContainer>
        <PageSettingDropDown>
          <FiMoreVertical />
        </PageSettingDropDown>
      </PageItem>
      <PageItem>
        <PageTitleContainer>
          <GrabIcon>
            <GoGrabber />
          </GrabIcon>
          <span>Home</span>
        </PageTitleContainer>
        <PageSettingDropDown>
          <FiMoreVertical />
        </PageSettingDropDown>
      </PageItem>
    </ControlPanelSettingContainer>
  );
};

export default ManagePages;
