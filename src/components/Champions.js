import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text } from 'native-base';
import {
  fetchChampions
} from '../actions/index';


// const datas = [
//   'Simon Mignolet',
//   'Nathaniel Clyne',
//   'Dejan Lovren',
//   'Mama Sakho',
//   'Alberto Moreno',
//   'Emre Can',
//   'Joe Allen',
//   'Phil Coutinho',
// ];

const datas = [
  {
    name: 'Simon Mignolet',
    favourite: true
  },
  {
    name: 'Nathaniel Clyne',
    favourite: false
  }
];

class Champions extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  modifyRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  renderRight(data, secId, rowId, rowMap) {
    return (
      <Button full danger onPress={_ => this.modifyRow(secId, rowId, rowMap)}>
        <Icon active name="add" />
      </Button>
    );
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <Container>
        <Content>

          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data.name} </Text>
              </ListItem>}

            renderRightHiddenRow={this.renderRight}
            rightOpenValue={-75}
          />

        </Content>
      </Container>
    );
  }
}

export default Champions;
// export default connect(null, { fetchChampions })(Champions);


/*
componentWillMount() {
    fetchChampions().then(data => {
      console.log(data);
    });
  }
*/