import React, {Component} from 'react';
import { Container, Accordion, Text, Button, Icon, Fab, Title, Header } from "native-base";
import {StyleSheet, View } from "react-native";
import { connect } from 'react-redux'
import Modal from "react-native-modal";
import { Actions } from 'react-native-router-flux';


import { CreateScheduleCard } from '../components';
import ReduxActions from '../actions'

const addScheduleAction = ReduxActions.addScheduleAction;



class ScheduleNavigationScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
      }
    }

    handleAdditionSubmit = (scheduleObject) => {
      this._toggleModal();
      this.props.onAddSchedule(scheduleObject);
    };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

    _renderContent = ({content}) => {
      const { name, description } = content;
      return (
        <View style={styles.accordionContent}>
          <Text
            style={{flex: 6}}
          >
            {description}
          </Text>
          <Button
            onPress={()=>Actions.scheduleScreen({ data: description, title: name })}
            style={{flex: 1, justifyContent: 'center'}}
          >
            <Icon name='arrow-forward' />
          </Button>
        </View>
      )};

    render() {
        const { scheduleData } = this.props;
        const dataArray = scheduleData.map(({ name, description }) => ({title: name, content: {name, description}}));
        return (
          <Container style={{flex:1}}>
            <Header>
              <Title>
                ScheduleNavigationScreen
              </Title>
            </Header>
            <Accordion dataArray={dataArray} renderContent={this._renderContent} />
            <Fab
              containerStyle={{ }}
              position="bottomRight"
              onPress={this._toggleModal}>
              <Icon name="ios-add" />
            </Fab>
            <Modal isVisible={this.state.isModalVisible}>
              <CreateScheduleCard onSubmit={this.handleAdditionSubmit} />
            </Modal>
          </Container>
        )
        ;
    }
}

const styles = StyleSheet.create({
  accordionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default connect(
  state => ({
    scheduleData: state.manageSchedules.schedules,
  }),
  dispatch => ({
    onAddSchedule: (scheduleObject) => {dispatch(addScheduleAction(scheduleObject))},
  })
)(ScheduleNavigationScreen);