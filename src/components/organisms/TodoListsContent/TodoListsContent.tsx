import React, { FC } from 'react';
import styled from 'styled-components/native';

import { IconCalendar, IconList, IconPerson, IconStar, IconSun, IconTask } from '@components/atoms';
import { SeparatorListItem, TodoListItem } from '@components/molecules';
import { BLUE_DARK, GRAY, GREEN_DARK, GREEN_LIGHT, RED } from '@components/colors';

interface Props {
  onSelectListItem?: (id: string) => void;
}

export const TodoListsContent: FC<Props> = ({ onSelectListItem = () => {} }) => {
  return (
    <Container>
      <TodoListItem icon={<IconSun color={GRAY} />} id="0" label="Mijn dag" />
      <TodoListItem icon={<IconStar color={RED} />} id="1" label="Belangrijk" />
      <TodoListItem icon={<IconCalendar color={GREEN_LIGHT} />} id="2" label="Gepland" />
      <TodoListItem icon={<IconPerson color={GREEN_DARK} />} id="3" label="Toegewezen aan u" />
      <TodoListItem icon={<IconTask color={BLUE_DARK} />} label="Taken" id="4" onSelect={onSelectListItem} />
      <SeparatorListItem />
      <TodoListItem icon={<IconList color={BLUE_DARK} />} id="5" label="Mijn huis" />
    </Container>
  );
};

const Container = styled.View`
  padding: 0 4px;
`;
