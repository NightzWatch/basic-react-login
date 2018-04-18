import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {Actions} from "react-native-router-flux";
import { Container, 
          Body, Header, Content, 
          Form, Item, Input, Label, Title, Button, Text} from 'native-base';

export default class ForgotPassword extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>
                New Password
              </Label>
              <Input>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>
                Confirm Password
              </Label>
              <Input>
              </Input>
            </Item>
            <Button primary block  onPress={() => Actions.forgotPassword()}>
              <Text>Forgot Password</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
