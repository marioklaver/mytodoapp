import React, { FC, ReactElement } from 'react';
import styled from 'styled-components/native';

import { WHITE } from '@components/colors';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { StyleSheet } from 'react-native';

interface Props {
  backgroundColor?: string;
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
  keyboardAccessory: ReactElement;
}

export const HeaderFooterContentLayout: FC<Props> = ({
  header,
  content,
  footer,
  keyboardAccessory,
  backgroundColor = WHITE,
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <SafeArea>
        <Header>{header}</Header>
        <Content keyboardDismissMode="interactive">{content}</Content>
        <Footer>{footer}</Footer>
      </SafeArea>
      <KeyboardAccessoryView hideBorder={true} style={{ backgroundColor: 'transparent' }}>
        {keyboardAccessory}
      </KeyboardAccessoryView>
    </Container>
  );
};

const Container = styled.View<Pick<Props, 'backgroundColor'>>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex: 1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: 'top',
  },
  textInputButton: {
    flexShrink: 1,
  },
});

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View``;

const Content = styled.ScrollView`
  flex: 1;
`;

const Footer = styled.View``;
