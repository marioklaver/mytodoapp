import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { TopNavigatorPage } from '@components/pages';
import { store } from '@state/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <TopNavigatorPage />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
