import React, { FC, ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { DefaultText } from '@components/atoms';
import styled from 'styled-components/native';
import { DEFAULT } from '@components/colors';

interface Props {
  icon: ReactElement;
  label: string;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export const IconTextButton: FC<Props> = ({ onPress = () => {}, icon, label, color = DEFAULT }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        {icon}
        <Label>
          <DefaultText color={color}>{label}</DefaultText>
        </Label>
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Label = styled.View`
  padding-left: 12px;
`;
