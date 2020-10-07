import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { Keyboard, TextInput as RNTextInput } from 'react-native';
import { GRAY, GRAY_0, WHITE } from '@components/colors';
import { IconCheckbox } from '@components/atoms';

interface Props {
  visible: boolean;
  value?: string;
  onChangeText?: (value: string) => void;
}

export const TodoListKeyboardAccessory: FC<Props> = ({ visible, value = '', onChangeText = () => {} }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (visible) {
      // @ts-ignore
      inputRef?.current?.focus();
    } else {
      Keyboard.dismiss();
    }
  }, [visible]);

  return (
    <Container>
      <Icon>
        <IconCheckbox color={GRAY} />
      </Icon>
      <TextInput
        ref={inputRef}
        value={value}
        placeholder="Taak toevoegen"
        placeholderTextColor={GRAY}
        onChangeText={onChangeText}
        spellCheck={false}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${WHITE};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  padding: 20px 0;
`;

const Icon = styled.View`
  padding: 0 12px 0 24px;
`;

const TextInput = styled(RNTextInput)`
  font-size: 16px;
  color: ${GRAY_0};
  flex: 1;
`;
