/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Button,
  Content,
  Icon,
  Input,
  InputGroup,
  List,
  ListItem
} from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List>
          <ListItem style={styles.listItem}>
            <InputGroup>
                <Icon name="ios-person" style={styles.icon} />
                <Input placeholder="EMAIL" />
            </InputGroup>
          </ListItem>
          <ListItem style={styles.listItem}>
            <InputGroup>
                <Icon name="ios-unlock" style={styles.icon} />
                <Input placeholder="PASSWORD" secureTextEntry />
            </InputGroup>
          </ListItem>
        </List>
        <Button block primary style={styles.btn}>Login</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 0,
    marginTop: 20
  },
  container: {
    padding: 5,
    flex: 1
  },
  icon: {
    color: '#0A69FE'
  },
  listItem: {
    marginBottom: 25
  }
});
