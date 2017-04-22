import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import autobind from 'autobind-decorator';

export default class MainScreen extends Component {
  static navigationOptions = {
      title: 'Welcome'
  }

  constructor(props, context) {
    super(props, context);
  }

  @autobind
  goBack() {
    this.props.navigation.dispatch(
      NavigationActions.back()
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Moi</Text>
        <Button primary onPress={this.goBack}>
          <Text>Back</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
