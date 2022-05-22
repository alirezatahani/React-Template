import * as React from 'react';
import { ToolTipProps } from './tooltip_types';
import { Tooltip, TooltipTarget } from '../styles/Tooltip.styles';

const ToolTip: React.FC<ToolTipProps> = ({
  children,
  ...rest
}: ToolTipProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  // const [isFocused, setIsFocused] = React.useState(false);
  // const targetRef = React.useRef(null);

  return (
    <TooltipTarget
      {...rest}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered ? <Tooltip {...rest}>{rest.title}</Tooltip> : null}
    </TooltipTarget>
  );
};

ToolTip.defaultProps = {};
export default ToolTip;
