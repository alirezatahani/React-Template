import React from 'react';
import { ThreeContentProps } from './threeContent_types';
import {
  WrapperCounter,
  TopStyled,
  RightStyled,
  LeftStyled,
  Container,
} from './ThreeContent.styles';
import Counter from '@components/counter/content/Counter';

const ThreeContent: React.FC<ThreeContentProps> = ({}: ThreeContentProps) => {
  return (
    <Container>
      <TopStyled>
        <WrapperCounter>
          <Counter />
        </WrapperCounter>
      </TopStyled>

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

ThreeContent.defaultProps = {};
export default ThreeContent;
