import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { ListSeparator, TitleText } from '@components/atoms';
import { TaskList } from '@components/molecules';
import { tasksListDoneSelector, tasksListTodoSelector, toggleTaskDone } from '@state/slices';

interface Props {
  color: string;
}

export const TodoListContent: FC<Props> = ({ color }) => {
  const tasksTodo = useSelector(tasksListTodoSelector);
  const tasksDone = useSelector(tasksListDoneSelector);
  const dispatch = useDispatch();

  const onToggleDone = (uuid: string) => {
    dispatch(toggleTaskDone(uuid));
  };

  return (
    <Container>
      <TitleText color={color}>Taken</TitleText>
      <TaskList tasks={tasksTodo} color={color} onToggleDone={onToggleDone} />
      <ListSeparator />
      <TaskList tasks={tasksDone} color={color} onToggleDone={onToggleDone} />
    </Container>
  );
};

const Container = styled.View`
  padding: 0 12px;
`;
