import React, { ReactElement, useState } from 'react';
import {
  TabPane,
  BottomBorderContainer,
  BottomBorder,
  TabContentContainer,
  TabSection,
  TabsContainer,
  TabsHead,
} from '../styles/tab.styles';
import { TabPaneProps, TabsProps } from './tab_types';

/**
 * @children should be an array of React elements
 * @align can be set as  'center' | 'end' | 'start'
 * @defaultTab can be set equal to tab name as you entered in TabPane
 * @tab should be set your tabs name as string
 * @disable can be set as true | false
 */
export const Tabs: React.FC<TabsProps> = ({ ...props }) => {
  const tabsArray: string[] = [];
  React.Children.map(props.children, (child: ReactElement) => {
    return tabsArray.push(child.props.tab);
  });
  const [activeTab, setActiveTab] = useState(
    props.defaultTab && tabsArray.indexOf(props.defaultTab) > 0
      ? props.defaultTab
      : tabsArray[0]
  );
  const handleTabClick = (tab: string) => {
    return setActiveTab(tab);
  };
  const renderTabs = () => {
    return React.Children.map(props.children, (child: ReactElement) => {
      return React.cloneElement(
        child as React.ReactElement<TabPaneProps>,
        {
          onClick: !child.props.disable
            ? () => handleTabClick(child.props.tab)
            : null,
        },
        <TabPane
          active={child.props.tab === activeTab}
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
    let activeContent = '';
    React.Children.map(children, (child: ReactElement) => {
      if (child.props.tab === activeTab)
        return (activeContent = child.props.children);
    });
    return activeContent;
  };
  return (
    <>
      <TabSection>
        <TabsHead>
          <TabsContainer align={props.align} defaultTab={activeTab}>
            {renderTabs()}
          </TabsContainer>
          <BottomBorderContainer>
            <BottomBorder></BottomBorder>
          </BottomBorderContainer>
        </TabsHead>
        <TabContentContainer>
          {renderActiveTabContent()}
        </TabContentContainer>
      </TabSection>
    </>
  );
};
Tabs.defaultProps = {
  align: 'start',
};
export type { TabPaneProps };
export { TabPane };
