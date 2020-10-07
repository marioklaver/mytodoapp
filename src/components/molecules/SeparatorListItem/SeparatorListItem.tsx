import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ListSeparator } from '@components/atoms';

interface Props {}

export const SeparatorListItem: FC<Props> = () => {
  return (
    <Separator>
      <ListSeparator />
    </Separator>
  );
};

const Separator = styled.View`
  padding: 12px 12px;
`;
