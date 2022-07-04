import * as React from 'react';
import {
  CollapseItemContainer,
  CollapseItemTitle,
  CollapseItemContent,
  ItemTitle,
} from '../styles/collapse.styles';
import { CollapseType } from './collapse_types';

const Collapsible: React.FC<CollapseType> = ({
  children,
  open = false,
  title,
}: CollapseType) => {
  const [showContent, setShowContent] = React.useState<boolean>(open);

  const toggle = () => setShowContent(!showContent);
  return (
    <CollapseItemContainer>
      <CollapseItemTitle onClick={toggle}>
        <ItemTitle>{title}</ItemTitle>
        {showContent ? <span>-</span> : <span>+</span>}
      </CollapseItemTitle>
      <CollapseItemContent showContent={showContent}>
        {children}
      </CollapseItemContent>
    </CollapseItemContainer>
  );
};

export default Collapsible;
