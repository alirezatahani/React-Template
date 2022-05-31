import * as React from 'react';
import {
  CollapsibleItemContainer,
  CollapsibleItemTitle,
  CollapsibleItemContent,
  ItemTitle,
} from '../styles/collapsible.styles';
import { CollapsibleType } from './collapsible_types';

const Collapsible: React.FC<CollapsibleType> = ({
  children,
  open = false,
  title,
}: CollapsibleType) => {
  const [showContent, setShowContent] = React.useState<boolean>(open);

  const toggle = () => setShowContent(!showContent);
  return (
    <CollapsibleItemContainer>
      <CollapsibleItemTitle onClick={toggle}>
        <ItemTitle>{title}</ItemTitle>
        {showContent ? <span>+</span> : <span>-</span>}
      </CollapsibleItemTitle>
      <CollapsibleItemContent showContent={showContent}>
        {children}
      </CollapsibleItemContent>
    </CollapsibleItemContainer>
  );
};

export default Collapsible;
