/**
 * @flow
 */
import React from 'react';
import {
  Container,
  Content,
  StyleProvider
} from 'native-base';
import { Provider } from 'react-redux';

import AppNavigatorWithState from './components/AppNavigatorWithState';
import configureStore from './store';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const store = configureStore();

const styles = {
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  }
};

const AuthenticationExample = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(platform)}>
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.contentContainer}>
          <AppNavigatorWithState />
        </Content>
      </Container>
    </StyleProvider>
  </Provider>
);

export default AuthenticationExample;
