/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Title
} from 'native-base';

import LoginForm from './components/loginform';

export default class AuthenticationExample extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Amazing app!!!</Title>
        </Header>
        <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require('./images/doge.png')}
            />
          </View>
          <LoginForm/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('AuthenticationExample', () => AuthenticationExample);
