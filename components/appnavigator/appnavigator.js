import React, { Component } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
  Platform,
  StyleSheet
} from 'react-native';
import { Content } from 'native-base';

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

import LoginScene from './../scenes/login';
import MainScene from './../scenes/main';

export default class AppNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderScene = this.renderScene.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
  }

  componentDidMount () {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
    }
  }

  componentWillUnmount () {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
    }
  }

  handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false;
    }
    this.props.popRoute();
    return true;
  }

  renderScene(sceneProps) {
    const { pushRoute, popRoute } = this.props;

    switch (sceneProps.scene.route.key) {
      case 'Login':
        return (
          <LoginScene
            onPushRoute={pushRoute.bind(this)}
          />
        );
      case 'Main':
        return (
          <MainScene
            onPopRoute={popRoute.bind(this)}
          />
        );
      default:
        null;
    }
  }

  render() {
    const { navigation, popRoute } = this.props;
    
    return (
      <NavigationCardStack
        onNavigateBack={popRoute.bind(this)}
        navigationState={navigation}
        renderScene={this.renderScene}
        style={styles.navigator}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});
