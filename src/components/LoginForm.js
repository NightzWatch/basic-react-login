import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {Actions} from "react-native-router-flux";
import { Container, 
          Body, Header, Content, 
          Form, Item, Input, Label, Title, Button, Text} from 'native-base';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange( email ) {
    this.props.emailChange( email );
  } 

  onPasswordChange( password ) {
    this.props.passwordChange( password );
  }

  onLoginBtnPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>
                Username
              </Label>
              <Input
                value = {this.props.email}
                onChangeText = {this.onEmailChange.bind(this)}
              />
            </Item>
            <Item floatingLabel>
              <Label>
                Password
              </Label>
                <Input
                value = {this.props.password}
                onChangeText = {this.onPasswordChange.bind(this)}
                secureTextEntry
                />
            </Item>
            <Button primary full onPress={(this.onLoginBtnPress.bind(this))} style={{ marginTop: 50 }}>
              <Text>Login</Text>
            </Button>
            <Button primary full onPress={() => Actions.register()} style={{ marginTop: 20 }}>
              <Text>Register</Text>
            </Button>
            <Button transparent full onPress={() => Actions.forgotPassword()}  style={{ marginTop: 10 }}>
              <Text>Forgot Password</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}



const mapStateToProps = ({auth}) => {
  const {email, password } = auth;

  return { email, password };
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
