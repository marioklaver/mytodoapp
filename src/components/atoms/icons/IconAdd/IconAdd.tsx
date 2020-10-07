import React from 'react';
import { Path, Svg as NativeSvg } from 'react-native-svg';
import styled from 'styled-components/native';

import { IconProps } from '@components/atoms';

const Svg = styled(NativeSvg)`
  width: 24px;
  height: 24px;
`;

export const IconAdd: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={color ? color : 'currentColor'} />
    </Svg>
  );
};
