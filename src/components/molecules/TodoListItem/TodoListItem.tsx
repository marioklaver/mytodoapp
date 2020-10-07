import React, { FC, ReactElement } from 'react';
import styled from 'styled-components/native';

import { DefaultText } from '@components/atoms';
import { GRAY_1, SELECTED } from '@components/colors';
import { TouchableHighlight } from 'react-native';

interface Props {
  icon: ReactElement;
  label: string;
  id: string;
  onSelect?: (id: string) => void;
}

export const TodoListItem: FC<Props> = ({ icon, label, id, onSelect = () => {} }) => {
  return (
    <TouchableHighlight underlayColor={SELECTED} onPress={() => onSelect(id)}>
      <Container>
        {icon}
        <Label>
          <DefaultText>{label}</DefaultText>
        </Label>
        <DefaultText color={GRAY_1}>2</DefaultText>
      </Container>
    </TouchableHighlight>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px 0;
  margin: 0 12px;
`;

const Label = styled.View`
  flex: 1;
  padding-left: 12px;
`;
