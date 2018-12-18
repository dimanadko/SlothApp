/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import {WelcomeScreen, ScheduleNavigationScreen, ScheduleFormScreen, TaskFormScreen, ScheduleScreen} from './src/screens'


export default class App extends Component{
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="WelcomeScreen" component={WelcomeScreen} title="WelcomeScreen"/>
          <Scene key="ScheduleNavigationScreen" component={ScheduleNavigationScreen} title="ScheduleNavigationScreen"/>
          <Scene key="ScheduleFormScreen" component={ScheduleFormScreen} title="ScheduleFormScreen"/>
          <Scene key="TaskFormScreen" component={TaskFormScreen} title="TaskFormScreen"/>
          <Scene key="ScheduleScreen" component={ScheduleScreen} title="ScheduleScreen"/>
        </Stack>
      </Router>
    );
  }
}

