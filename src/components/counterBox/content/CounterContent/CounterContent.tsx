import React, { useState } from 'react';
import { CounterContentProps } from './counterContent_types';
import {
  DiamondShape,
  SquareShape,
  LockBox,
} from './styles/CounterContent.styles';
import { FaLock, FaUnlock } from 'react-icons/Fa';

const CounterContent: React.FC<CounterContentProps> = ({
  position,
  children,
  shape,
}: CounterContentProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <div>
      {shape === 'diamond' ? (
        <DiamondShape position={position}>{children}</DiamondShape>
      ) : (
        <SquareShape position={position}>{children}</SquareShape>
      )}
      {isLocked ? (
        <LockBox onClick={() => setIsLocked(false)}>
          <FaLock />
        </LockBox>
      ) : (
        <LockBox onClick={() => setIsLocked(true)}>
          <FaUnlock />
        </LockBox>
      )}
    </div>
  );
};

CounterContent.defaultProps = {};
export default CounterContent;
