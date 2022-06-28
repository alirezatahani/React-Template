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

      <LockBox onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? <FaLock /> : <FaUnlock />}
      </LockBox>
    </div>
  );
};

CounterContent.defaultProps = {};
export default CounterContent;
