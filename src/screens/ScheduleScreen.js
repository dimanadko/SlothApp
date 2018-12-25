import React, {Component} from 'react';
import { View } from 'react-native';
import {Text, Title, Fab, Icon, Button} from 'native-base';
import { connect } from 'react-redux'
import Modal from "react-native-modal";

import { CreateTaskCard, GanttChart } from '../components'
import Actions from '../actions'
import { nameToKey } from '../helpers'

const addTaskAction = Actions.addTaskAction;
const sortScheduleAction = Actions.sortScheduleAction;

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

  handleSort = (scheduleKey) => () => {
    this.props.onSort(scheduleKey)
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
        <Text style={{flex: 1, justifyContent: 'center'}} >{scheduleData.description}</Text>
        <Text style={{flex: 1, justifyContent: 'center'}} >{scheduleData.releaseDate}</Text>
        <Text style={{flex: 1, justifyContent: 'center'}} >{scheduleData.dueDate}</Text>
        <View style={{flex: 16}}>
          <GanttChart scheduleData={scheduleData}/>
        </View>
        <Fab
          containerStyle={{ }}
          position="bottomRight"
          onPress={this._toggleModal}>
          <Icon name="ios-add" />
        </Fab>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
          <Button  onPress={this.handleSort(nameToKey(title))}>
            <Text>Sort</Text>
          </Button>
        </View>
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
    onSort: (
      scheduleKey
    ) => { dispatch(sortScheduleAction(scheduleKey))}
  })
)(ScheduleScreen);