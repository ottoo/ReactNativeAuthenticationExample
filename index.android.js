/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Title
} from 'native-base';
import { Provider } from 'react-redux';

import AppNavigator from './components/appnavigator';
import configureStore from './store';

const store = configureStore();

export default class AuthenticationExample extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>
          <Header>
            <Title>Amazing app!</Title>
          </Header>
          <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
              <AppNavigator/>
          </Content>
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('AuthenticationExample', () => AuthenticationExample);
