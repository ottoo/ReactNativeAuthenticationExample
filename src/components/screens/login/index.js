/* eslint-disable global-require */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Image,
  View
} from 'react-native';
import autobind from 'autobind-decorator';

import LoginForm from './../../LoginForm';
import { AUTHENTICATE } from './../../../actions/authentication';

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

@connect(null, dispatch => ({
  authenticate({ username, password }) {
    dispatch(AUTHENTICATE({ username, password }));
  }
}))
export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  static propTypes = {
    authenticate: PropTypes.func.isRequired
  }

  @autobind
  login({ username, password }) {
    this.props.authenticate({
      username,
      password
    });
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
        <LoginForm
          onSubmit={this.login}
        />
      </View>
    );
  }
}
