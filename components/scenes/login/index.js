import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { NavigationExperimental } from 'react-native';

import LoginForm from './../../loginform';

const route = {
  key: 'Main',
  title: 'Main'
};

export default class LoginScene extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { onPushRoute } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('./../../../images/doge.png')}
          />
        </View>
        <LoginForm onPushRoute={onPushRoute.bind(this, route)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
