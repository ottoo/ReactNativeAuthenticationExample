import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import autobind from 'autobind-decorator';

import LoginForm from './../../loginform';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  constructor(props, context) {
    super(props, context);
  }

  @autobind
  login() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'Main'
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('./../../../images/doge.png')}
          />
        </View>
        <LoginForm onSubmit={this.login}/>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
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
};
