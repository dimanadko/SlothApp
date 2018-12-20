/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import { AppNavigation } from './src/wrappers'

const store = createStore(reducers);

export default class App extends Component{
  render() {
    return (
      <Provider store={ store }>
        <AppNavigation/>
      </Provider>
    );
  }
}

