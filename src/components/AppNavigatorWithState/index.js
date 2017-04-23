import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content } from 'native-base';
import { addNavigationHelpers } from 'react-navigation';

import { AppNavigator } from './AppNavigator';

@connect(state => ({
  navigation: state.navigation
}))
export default class AppNavigatorWithState extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: navigation,
      })}/>
    );
  }
}

const styles = {
  navigator: {
    flex: 1
  }
};
