import React, { FC } from 'react';
import styled from 'styled-components/native';

import { Task } from '@state/slices';
import { TaskListItem } from '@components/molecules/TaskListItem/TaskListItem';

interface Props {
  tasks: Task[];
  onToggleDone?: (uuid: string) => void;
  color: string;
}

export const TaskList: FC<Props> = ({ tasks, onToggleDone = () => {}, color }) => {
  const renderItem = (task: Task) => {
    return <TaskListItem task={task} key={task.uuid} color={color} onToggleDone={onToggleDone} />;
  };

  return <Container>{tasks.map(renderItem)}</Container>;
};

const Container = styled.View``;
