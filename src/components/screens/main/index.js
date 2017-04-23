import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import autobind from 'autobind-decorator';

const styles = {
  container: {
    flex: 1
  }
};

@connect(state => ({
  authentication: state.authentication
}))
export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'Welcome'
  }

  static propTypes = {
    authentication: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  }

  @autobind
  goBack() {
    this.props.navigation.dispatch(
      NavigationActions.back()
    );
  }

  render() {
    const { authentication } = this.props;

    return (
      <View style={styles.container}>
        <Text>Moi {authentication.username}</Text>
        <Button primary onPress={this.goBack}>
          <Text>Back</Text>
        </Button>
      </View>
    );
  }
}
