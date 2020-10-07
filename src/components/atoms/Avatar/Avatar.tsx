import React, { FC } from 'react';
import { Image as RNImage, ImageStyle } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  uri: string;
}

const MyImage = styled(RNImage)<ImageStyle>`
  width: 32px;
  height: 32px;
  resize-mode: contain;
  border-radius: 16px;
`;

export const Avatar: FC<Props> = ({ uri }) => {
  return <MyImage source={{ uri: uri }} width={32} height={32} />;
};
