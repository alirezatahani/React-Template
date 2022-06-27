import React, { useState } from 'react';
import { CounterContentProps } from './counterContent_types';
import { Main, LockBox } from './styles/CounterContent.styles';
import { FaLock, FaUnlock } from 'react-icons/Fa';

const CounterContent: React.FC<CounterContentProps> = ({
  position,
  children,
}: CounterContentProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <div>
      <Main position={position}>{children}</Main>
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
