import React, { Component } from 'react';
import { NavigationExperimental, StyleSheet } from 'react-native';
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
  }

  renderScene(sceneProps) {
    const { onNavigationChange } = this.props;

    switch (sceneProps.scene.route.key) {
      case 'Login':
        return (
          <LoginScene
            onPushRoute={onNavigationChange.bind(this, { type: 'push', key: 'Main' })}
          />
        );
      case 'Main':
        return (
          <MainScene
            onPopRoute={onNavigationChange.bind(this, { type: 'pop' })}
          />
        );
      default:
        null;
    }
  }

  render() {
    const { onNavigationChange, navigationState } = this.props;
    
    return (
      <NavigationCardStack
        onNavigateBack={onNavigationChange.bind(this, { type: 'pop' })}
        navigationState={navigationState}
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
