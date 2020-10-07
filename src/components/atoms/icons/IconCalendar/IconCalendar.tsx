import React from 'react';
import { Path, Svg as NativeSvg } from 'react-native-svg';
import styled from 'styled-components/native';

import { IconProps } from '@components/atoms';

const Svg = styled(NativeSvg)`
  width: 24px;
  height: 24px;
`;

export const IconCalendar: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path
        d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"
        fill={color ? color : 'currentColor'}
      />
    </Svg>
  );
};
