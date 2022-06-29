import React, { useState, useEffect, useCallback } from 'react';
import { CounterBoxProps } from './counterBox_types';
import TwoContent from './TwoContent/TwoContent';
import ThreeContent from './ThreeCountent/ThreeContent';
import FourContent from './FourContent/FourContent';

const CounterBox: React.FC<CounterBoxProps> = ({
  number,
  value,
}: CounterBoxProps) => {
  // const MyComponent = ({values}) => {
  //   const renderContent = useCallback(() => {
  //     switch(values) {
  //       case 2:
  //         return <p>2</p>;

  //         case 3:
  //         return <p>3</p>;

  //         case 4:
  //         return <p>4</p>;

  //       default:
  //         return null;

  //     }
  //   }, [values]);

  const renderContent = (number: number) => {
    switch (number) {
      case 2:
        return <TwoContent value={value} shape="inline" />;
      case 3:
        return <ThreeContent value={value} shape="triangle" />;
      case 4:
        return <FourContent />;
      default:
        return null;
    }
  };

  return <div>{renderContent(number)}</div>;
};

CounterBox.defaultProps = {};
export default CounterBox;
