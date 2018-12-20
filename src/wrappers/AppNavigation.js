import React, {Component} from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import {WelcomeScreen, ScheduleNavigationScreen, ScheduleFormScreen, TaskFormScreen, ScheduleScreen} from '../screens'


class AppNavigation extends Component{
  render() {
    return (
        <Router>
          <Stack key="root">
            <Scene key="welcomeScreen" component={WelcomeScreen} hideNavBar/>
            <Scene key="scheduleNavigationScreen" component={ScheduleNavigationScreen} title="ScheduleNavigationScreen" hideNavBar/>
            <Scene key="scheduleFormScreen" component={ScheduleFormScreen} title="ScheduleFormScreen"/>
            <Scene key="taskFormScreen" component={TaskFormScreen} title="TaskFormScreen"/>
            <Scene key="scheduleScreen" component={ScheduleScreen} title="ScheduleScreen"/>
          </Stack>
        </Router>
    );
  }
}

export default AppNavigation;

