import React from 'react';
import { Path, Svg as NativeSvg } from 'react-native-svg';
import styled from 'styled-components/native';

import { IconProps } from '@components/atoms';

const Svg = styled(NativeSvg)`
  width: 24px;
  height: 24px;
`;

export const IconBack: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" fill={color ? color : 'currentColor'} />
      <Path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
};
