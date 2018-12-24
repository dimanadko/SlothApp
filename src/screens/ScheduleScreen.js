import React, {Component} from 'react';
import { View } from 'react-native';
import {Text, Title, Fab, Icon} from 'native-base';
import { connect } from 'react-redux'
import Modal from "react-native-modal";

import { CreateTaskCard, GanttChart } from '../components'
import Actions from '../actions'
import { nameToKey } from '../helpers'

const addTaskAction = Actions.addTaskAction;

class ScheduleScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  taskAddition = (scheduleKey) => (task) => {
    this._toggleModal();
    this.props.onAddTask(scheduleKey, task)
  };

  _toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { schedules } = this.props;
    // const data = this.props.data || 'No Data';
    const title = this.props.title || 'No title';
    const scheduleData = schedules[nameToKey(title)];
    return (
      <View style={{flex:1}}>
        <Text>{scheduleData.description}</Text>
        <Text>{scheduleData.releaseDate}</Text>
        <Text>{scheduleData.dueDate}</Text>
        <GanttChart scheduleData={scheduleData}/>
        <Fab
          containerStyle={{ }}
          position="bottomRight"
          onPress={this._toggleModal}>
          <Icon name="ios-add" />
        </Fab>
        <Modal isVisible={this.state.modalOpen} onBackdropPress={this._toggleModal}>
          <CreateTaskCard onSubmit={this.taskAddition(nameToKey(title))}/>
        </Modal>
      </View>
    )
      ;
  }
}

export default connect(
  state => ({schedules: state.manageSchedules.schedules}),
  dispatch => ({
    onAddTask: (
      scheduleKey,
      task
    ) => {dispatch(addTaskAction(scheduleKey, task))},
  })
)(ScheduleScreen);