/**
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  List,
  ListItem,
  Text
} from 'native-base';
import autobind from 'autobind-decorator';

const styles = {
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
};

export default class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  @autobind
  submit() {
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <ListItem style={styles.listItem}>
            <InputGroup>
              <Icon name="ios-person" style={styles.icon} />
              <Input
                autoCapitalize="none"
                placeholder="Username"
                onChangeText={(username) => this.setState({ username })}
              />
            </InputGroup>
          </ListItem>
          <ListItem style={styles.listItem}>
            <InputGroup>
              <Icon name="ios-unlock" style={styles.icon} />
              <Input
                placeholder="Password"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />
            </InputGroup>
          </ListItem>
        </List>
        <Button block primary style={styles.btn} onPress={this.submit}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}
