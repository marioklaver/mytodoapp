import React, { FC } from 'react';
import { IconTextButton } from '@components/molecules';
import { IconAdd } from '@components/atoms';
import styled from 'styled-components/native';

interface Props {}

export const TodoListsActionBar: FC<Props> = () => {
  return (
    <Container>
      <IconTextButton icon={<IconAdd />} label="Nieuwe lijst" />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding: 12px 16px;
`;
