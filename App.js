import React, { Component } from 'react';
import Router from "./src/Router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import { Root } from "native-base";
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    // PUT FIREBASE CONFIG HERE
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk) );

    return (
      <Provider
      store={store}
      >
      <Root>
        <Router/>
      </Root>
      </Provider>
    );
  }
}


