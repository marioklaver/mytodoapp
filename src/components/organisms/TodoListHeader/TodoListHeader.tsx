import React, { FC } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

import { BoldText, DefaultText, IconBack } from '@components/atoms';

interface Props {
  color: string;
  onBack?: () => void;
  showDoneButton?: boolean;
  onDone?: () => void;
}

export const TodoListHeader: FC<Props> = ({ onBack = () => {}, color, showDoneButton = false, onDone = () => {} }) => {
  return (
    <Container>
      <LeftAction>
        <TouchableWithoutFeedback onPress={onBack}>
          <Button>
            <IconBack color={color} />
            <DefaultText color={color}>Lijsten</DefaultText>
          </Button>
        </TouchableWithoutFeedback>
      </LeftAction>
      <RightAction>
        {showDoneButton && (
          <TouchableOpacity onPress={onDone}>
            <Button>
              <BoldText color={color}>Gereed</BoldText>
            </Button>
          </TouchableOpacity>
        )}
      </RightAction>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 12px 12px;
`;

const LeftAction = styled.View`
  flex: 1;
`;

const RightAction = styled.View`
  padding-right: 12px;
`;

const Button = styled.View`
  align-items: center;
  flex-direction: row;
`;
