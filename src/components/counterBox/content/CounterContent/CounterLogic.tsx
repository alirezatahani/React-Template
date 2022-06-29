import React, { useState } from 'react';
import { CounterLogicProps } from './counterLogic_types';
import {
  DiamondShape,
  SquareShape,
  LockBox,
} from './styles/CounterLogic.styles';
import { FaLock, FaUnlock } from 'react-icons/Fa';

const CounterLogic: React.FC<CounterLogicProps> = ({
  position,
  children,
  shape,
}: CounterLogicProps) => {
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

CounterLogic.defaultProps = {};
export default CounterLogic;
