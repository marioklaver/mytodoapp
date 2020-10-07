import React from 'react';
import { Path, Svg as NativeSvg } from 'react-native-svg';
import styled from 'styled-components/native';

import { IconProps } from '@components/atoms';

const Svg = styled(NativeSvg)`
  width: 24px;
  height: 24px;
`;

export const IconCheckbox: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill={color ? color : 'currentColor'}
      />
    </Svg>
  );
};

export const IconCheckboxChecked: React.FC<IconProps> = ({ color }) => {
  return (
    <Svg viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill={color ? color : 'currentColor'}
      />
    </Svg>
  );
};
