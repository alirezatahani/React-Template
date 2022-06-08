import React, { useState } from 'react';
import {
  TabContainer,
  TabContent,
  TabPane,
  Tabs,
  TabContentContainer,
  TabsBar,
} from '../styles/tab.styles';
import { TabProps } from './tab_types';

const Tab: React.FC<TabProps> = ({ items, align, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <TabContainer>
        <Tabs align={align}>
          {items.map((item) => {
            const index: number = items.indexOf(item);
            return (
              <TabPane
                key={item}
                activeTab={index === activeIndex ? true : false}
                disable={index === props.disable - 1 ? true : false}
                onClick={() => {
                  if (props.disable - 1 !== index) setActiveIndex(index);
                }}
              >
                {item}
              </TabPane>
            );
          })}
          <TabsBar></TabsBar>
        </Tabs>
        <TabContentContainer>
          {props.children.map((child) => {
            const index = props.children.indexOf(child);
            return (
              <TabContent showContent={index === activeIndex ? true : false}>
                {child}
              </TabContent>
            );
          })}
        </TabContentContainer>
      </TabContainer>
    </>
  );
};
Tab.defaultProps = {
  align: 'start',
};
export default Tab;
