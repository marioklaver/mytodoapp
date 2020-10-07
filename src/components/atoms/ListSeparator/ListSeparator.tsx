import React, { FC } from 'react';
import { PixelRatio } from 'react-native';
import styled from 'styled-components/native';

import { GRAY_2 } from '@components/colors';

interface Props {
  color?: any;
}

const Container = styled.View<Props>`
  background-color: ${({ color }) => color};
  height: ${1 / PixelRatio.get()}px;
`;

export const ListSeparator: FC<Props> = ({ color = GRAY_2 }) => {
  return <Container color={color} />;
};
