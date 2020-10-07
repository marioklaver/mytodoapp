import React, { FC, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { HeaderFooterContentLayout } from '@components/templates';
import { TodoListHeader, TodoListContent, TodoListActionBar, TodoListKeyboardAccessory } from '@components/organisms';
import { PageParamList } from '@components/pages';
import { BLUE_DARK, BLUE_LIGHT } from '@components/colors';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';
import { addTaskAsynchronous } from '@state/slices';

interface Props {
  navigation: StackNavigationProp<PageParamList, 'TodoListPage'>;
}

export const TodoListPage: FC<Props> = ({ navigation }) => {
  // TODO useState [addTaskVisible]
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const [newTaskItem, setNewTaskItem] = useState('');
  const dispatch = useDispatch();

  const gotoListsPage = () => {
    navigation.goBack();
  };

  // TODO onAddTask
  const onAddTask = () => {
    setAddTaskVisible(true);
    setNewTaskItem('');
  };

  // TODO addNewTask
  const addNewTask = () => {
    setAddTaskVisible(false);
    if (newTaskItem) {
      dispatch(addTaskAsynchronous({ uuid: uuid.v4(), done: false, text: newTaskItem, favorite: false }));
    }
  };

  return (
    <HeaderFooterContentLayout
      header={
        <TodoListHeader onBack={gotoListsPage} color={BLUE_DARK} showDoneButton={addTaskVisible} onDone={addNewTask} />
      }
      content={<TodoListContent color={BLUE_DARK} />}
      footer={<TodoListActionBar color={BLUE_DARK} onAddTask={onAddTask} />}
      keyboardAccessory={
        <TodoListKeyboardAccessory visible={addTaskVisible} onChangeText={setNewTaskItem} value={newTaskItem} />
      }
      backgroundColor={BLUE_LIGHT}
    />
  );
};
