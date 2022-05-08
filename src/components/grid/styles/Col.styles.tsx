import * as React from 'react';
import styled from 'styled-components';

interface ColProps {
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const sizes = {
  mobile: '576px',
  laptop: '768px',
  desktop: '1200px',
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const calculateWidth = (num: number) => `${(num * 100) / 12}%`;

export const StyledCol = styled.div<ColProps>`
  border: solid 2px blue;

  @media ${devices.mobile} {
    width: ${({ sm }) => sm && calculateWidth(sm)};
  }
  @media ${devices.laptop} {
    width: ${({ md }) => md && calculateWidth(md)};
  }
  @media ${devices.desktop} {
    width: ${({ lg }) => lg && calculateWidth(lg)};
  }
`;
