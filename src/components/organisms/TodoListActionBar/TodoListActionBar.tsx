import React, { FC } from 'react';
import styled from 'styled-components/native';

import { IconTextButton } from '@components/molecules';
import { IconAdd } from '@components/atoms';
import { BLUE } from '@components/colors';

interface Props {
  color: string;
  onAddTask?: () => void;
}

export const TodoListActionBar: FC<Props> = ({ color, onAddTask = () => {} }) => {
  return (
    <Container>
      <IconTextButton icon={<IconAdd color={color} />} label="Taak toevoegen" color={color} onPress={onAddTask} />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${BLUE};
  border-radius: 8px;
  flex-direction: row;
  margin: 0px 12px;
  padding: 12px 16px;
`;
