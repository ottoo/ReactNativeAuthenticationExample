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
  Button,
  Container,
  Content,
  Header,
  Title
} from 'native-base';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

import AppNavigator from './components/appnavigator';

export default class AuthenticationExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'Login'}],
      },
    };

    this.onNavigationChange = this.onNavigationChange.bind(this);
  }

  onNavigationChange(action) {
    let { navigationState } = this.state;
    console.log(action);
    switch (action.type) {
    case 'push':
      navigationState = NavigationStateUtils.push(navigationState, { key: action.key});
      break;
    case 'pop':
      navigationState = navigationState.index > 0 ?
        NavigationStateUtils.pop(navigationState) : navigationState;
      break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Amazing app</Title>
        </Header>
        <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <AppNavigator
            navigationState={this.state.navigationState}
            onNavigationChange={this.onNavigationChange}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('AuthenticationExample', () => AuthenticationExample);
