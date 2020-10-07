import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Avatar, BoldText, IconSearch } from '@components/atoms';
import { BLUE_DARK } from '@components/colors';

interface Props {}

export const TodoListsHeader: FC<Props> = () => {
  return (
    <Container>
      <Avatar uri="https://pbs.twimg.com/profile_images/536259227245740033/MZA4cVzg_400x400.jpeg" />
      <Username>
        <BoldText>Mario Klaver</BoldText>
      </Username>
      <IconSearch color={BLUE_DARK} />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px 12px;
`;

const Username = styled.View`
  flex: 1;
  padding-left: 8px;
`;
