/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import {WelcomeScreen, ScheduleNavigationScreen, ScheduleFormScreen, TaskFormScreen, ScheduleScreen} from './src/screens'

const store = createStore(reducers);

export default class App extends Component{
  render() {
    return (
      <Provider store={ store }>
        <Router>
            <Stack key="root">
              <Scene key="welcomeScreen" component={WelcomeScreen} title="WelcomeScreen"/>
              <Scene key="scheduleNavigationScreen" component={ScheduleNavigationScreen} title="ScheduleNavigationScreen"/>
              <Scene key="scheduleFormScreen" component={ScheduleFormScreen} title="ScheduleFormScreen"/>
              <Scene key="taskFormScreen" component={TaskFormScreen} title="TaskFormScreen"/>
              <Scene key="scheduleScreen" component={ScheduleScreen} title="ScheduleScreen"/>
            </Stack>
        </Router>
      </Provider>
    );
  }
}

