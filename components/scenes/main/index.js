import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';

export default class MainScene extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { onPopRoute } = this.props;
    return (
      <View style={styles.container}>
        <Text>Moi</Text>
        <Button primary onPress={onPopRoute}>
          <Text>Back</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
