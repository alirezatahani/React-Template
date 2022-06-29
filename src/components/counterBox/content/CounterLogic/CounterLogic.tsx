import React, { useState, useCallback } from 'react';
import { CounterLogicProps } from './counterLogic_types';
import {
  DiamondShape,
  SquareShape,
  LockBoxFourValues,
  InlineShape,
  TriangleShape,
  TriangleLockBox,
  InlineLockBox,
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
        return (
          <>
            <InlineShape position={position}>{children}</InlineShape>
            <InlineLockBox onClick={() => setIsLocked(!isLocked)}>
              {isLocked ? <FaLock /> : <FaUnlock />}
            </InlineLockBox>
          </>
        );
      case 'triangle':
        return (
          <>
            <TriangleShape position={position}>{children}</TriangleShape>
            <TriangleLockBox onClick={() => setIsLocked(!isLocked)}>
              {isLocked ? <FaLock /> : <FaUnlock />}
            </TriangleLockBox>
          </>
        );
      case 'diamond':
        return (
          <>
            <DiamondShape position={position}>{children}</DiamondShape>
            <LockBoxFourValues onClick={() => setIsLocked(!isLocked)}>
              {isLocked ? <FaLock /> : <FaUnlock />}
            </LockBoxFourValues>
          </>
        );
      case 'square':
        return (
          <>
            <SquareShape position={position}>{children}</SquareShape>
            <LockBoxFourValues onClick={() => setIsLocked(!isLocked)}>
              {isLocked ? <FaLock /> : <FaUnlock />}
            </LockBoxFourValues>
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent(shape)}</div>;
};

CounterLogic.defaultProps = {};
export default CounterLogic;
