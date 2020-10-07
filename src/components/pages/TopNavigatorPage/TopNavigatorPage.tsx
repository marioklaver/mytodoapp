import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TodoListsPage } from '@components/pages/TodoListsPage/TodoListsPage';
import { TodoListPage } from '@components/pages/TodoListPage/TodoListPage';

const TopStack = createStackNavigator();

export const TopNavigatorPage: FC = () => {
  return (
    <TopStack.Navigator headerMode="none">
      <TopStack.Screen name="TodoListsPage" component={TodoListsPage} />
      <TopStack.Screen name="TodoListPage" component={TodoListPage} />
    </TopStack.Navigator>
  );
};
