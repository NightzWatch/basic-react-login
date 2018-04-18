import React, { Component } from 'react';
import { Container, Content, Thumbnail } from 'native-base';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Thumbnail large source={{uri: 'https://image.flaticon.com/icons/png/512/78/78373.png'}} />
        </Content>
      </Container>
    );
  }
}