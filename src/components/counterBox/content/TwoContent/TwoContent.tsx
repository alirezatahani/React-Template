import React from 'react';
import { TwoContentProps } from './twoContent_types';
import {
  WrapperCounter,
  RightStyled,
  LeftStyled,
  Container,
} from './TwoContent.styles';
import Counter from '@components/counter/content/Counter';

const TwoContent: React.FC<TwoContentProps> = ({
  ...rest
}: TwoContentProps) => {
  return (
    <Container>
      <RightStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </RightStyled>

      <LeftStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </LeftStyled>
    </Container>
  );
};

TwoContent.defaultProps = {};
export default TwoContent;
