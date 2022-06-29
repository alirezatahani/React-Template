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
        return 'coming soon';
      case 'square':
        return 'coming soon';
      default:
        return null;
    }
  };

  return (
    <div>
      {/* {shape === 'diamond' ? (
        <DiamondShape position={position}>{children}</DiamondShape>
      ) : (
        <SquareShape position={position}>{children}</SquareShape>
      )}

      <LockBox onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? <FaLock /> : <FaUnlock />}
      </LockBox> */}
      {renderContent(shape)}
    </div>
  );
};

CounterLogic.defaultProps = {};
export default CounterLogic;
