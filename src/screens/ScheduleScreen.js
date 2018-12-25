import React, {Component} from 'react';
import { View } from 'react-native';
import {Text, Title, Fab, Icon, Button, ActionSheet} from 'native-base';
import { connect } from 'react-redux'
import Modal from "react-native-modal";

import { CreateTaskCard, GanttChart } from '../components'
import Actions from '../actions'
import { nameToKey } from '../helpers'

const addTaskAction = Actions.addTaskAction;
const sortScheduleAction = Actions.sortScheduleAction;

const BUTTONS = [
  { text: "retardMinim" },
  { text: "weightedRetardMinim"},
  { text: "tasksCompability"},
  { text: "Delete"},
  { text: "Cancel"}
];

const CANCEL_INDEX = 4;
const DESTRUCTIVE_INDEX = 3;


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
        <View style={{flex: 12}}>
          <GanttChart scheduleData={scheduleData}/>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
          <Button
            onPress={
              this.handleSort(nameToKey(title))
            }
          >
            <Text>Sort</Text>
          </Button>
        </View>
        <Modal isVisible={this.state.modalOpen} onBackdropPress={this._toggleModal}>
          <CreateTaskCard onSubmit={this.taskAddition(nameToKey(title))}/>
        </Modal>
        <Fab
          containerStyle={{ }}
          position="bottomRight"
          onPress={this._toggleModal}>
          <Icon name="ios-add" />
        </Fab>
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