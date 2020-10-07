import React from 'react';
import { G, Path, Svg as NativeSvg } from 'react-native-svg';
import styled from 'styled-components/native';

import { IconProps } from '@components/atoms';

const Svg = styled(NativeSvg)`
  width: 24px;
  height: 24px;
`;

export const IconList: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <G fill="none">
        <Path d="M0 0h24v24H0V0z" />
        <Path d="M0 0h24v24H0V0z" opacity=".87" />
      </G>
      <Path
        d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
        fill={color ? color : 'currentColor'}
      />
    </Svg>
  );
};
