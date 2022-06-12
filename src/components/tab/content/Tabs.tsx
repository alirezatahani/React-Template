import React, { ReactElement, useState } from 'react';
import {
  TabPane,
  BottomBorderContainer,
  BottomBorder,
  TabContentContainer,
  TabSection,
  TabsContainer,
} from '../styles/tab.styles';
import { TabPaneProps, TabsProps } from './tab_types';

const Tabs: React.FC<TabsProps> = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (index: number) => {
    return setActiveIndex(index);
  };
  const renderTabs = () => {
    return React.Children.map(props.children, (child: ReactElement, index) => {
      return React.cloneElement(
        child as React.ReactElement<TabPaneProps>,
        {
          onClick: !child.props.disable ? () => handleTabClick(index) : null,
        },
        <TabPane
          activeTab={index === activeIndex}
          disable={child.props.disable}
          {...child.props}
        >
          {child.props.tab}
        </TabPane>
      );
    });
  };
  const renderActiveTabContent = () => {
    const { children } = props;
    if (children[activeIndex]) {
      return children[activeIndex].props.children;
    }
  };
  return (
    <>
      <TabSection>
        <TabsContainer align={props.align}>{renderTabs()}</TabsContainer>
        <BottomBorderContainer>
          <BottomBorder></BottomBorder>
        </BottomBorderContainer>
        <TabContentContainer>{renderActiveTabContent()}</TabContentContainer>
      </TabSection>
    </>
  );
};
Tabs.defaultProps = {
  align: 'start',
};
export default Tabs;
