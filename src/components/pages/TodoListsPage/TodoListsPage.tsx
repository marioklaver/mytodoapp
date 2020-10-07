import React, { FC } from 'react';
import { HeaderFooterContentLayout } from '@components/templates';
import { TodoListsContent, TodoListsHeader } from '@components/organisms';
import { TodoListsActionBar } from '@components/organisms/TodoListsActionBar/TodoListsActionBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { PageParamList } from '@components/pages';

interface Props {
  navigation: StackNavigationProp<PageParamList, 'TodoListsPage'>;
}

export const TodoListsPage: FC<Props> = ({ navigation }) => {
  const gotoListPage = (id: string) => {
    navigation.navigate('TodoListPage', { id: id });
  };

  return (
    <HeaderFooterContentLayout
      header={<TodoListsHeader />}
      content={<TodoListsContent onSelectListItem={gotoListPage} />}
      footer={<TodoListsActionBar />}
    />
  );
};
