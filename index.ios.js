/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import {
  Container,
  Content,
  Header,
  StyleProvider,
  Title
} from 'native-base';
import { Provider } from 'react-redux';

import AppNavigator from './components/appnavigator';
import configureStore from './store';

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const store = configureStore();

export default class AuthenticationExample extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <Container style={styles.container}>
              <Header>
                <Title>Amazing app</Title>
              </Header>
              <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
                  <AppNavigator/>
              </Content>
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

AppRegistry.registerComponent('AuthenticationExample', () => AuthenticationExample);
