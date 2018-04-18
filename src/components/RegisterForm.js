import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, 
          Body, Header, Content, 
          Form, Item, Input, Label, Title, Button, Text} from 'native-base';

export default class RegisterForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>
                Username
              </Label>
              <Input>
              </Input>
            </Item>
            <Item floatingLabel>
              <Label>
                Password
              </Label>
              <Input>
              </Input>
            </Item>
            <Button primary block>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
