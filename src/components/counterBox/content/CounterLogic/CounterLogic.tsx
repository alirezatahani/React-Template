import React, { useState } from 'react';
import { CounterLogicProps } from './counterLogic_types';
import {
  DiamondShape,
  SquareShape,
  LockBox,
  InlineShape,
  TriangleShape,
} from './styles/CounterLogic.styles';
import { FaLock, FaUnlock } from 'react-icons/Fa';

const CounterLogic: React.FC<CounterLogicProps> = ({
  position,
  children,
  shape,
}: CounterLogicProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const renderContent = (shape: string) => {
    switch (shape) {
      case 'inline':
        return <InlineShape position={position}>{children}</InlineShape>;
      case 'triangle':
        return <TriangleShape position={position}>{children}</TriangleShape>;
      case 'diamond':
        return <DiamondShape position={position}>{children}</DiamondShape>;
      case 'square':
        return <SquareShape position={position}>{children}</SquareShape>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent(shape)}
      {/* <LockBox onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? <FaLock /> : <FaUnlock />}
      </LockBox> */}
    </div>
  );
};

CounterLogic.defaultProps = {};
export default CounterLogic;
