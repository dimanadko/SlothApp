import React, {Component} from 'react';
import { Container, Content, Accordion, Text, Button, Icon, Fab, Body, Card, CardItem } from "native-base";
import {StyleSheet, View, Dimensions } from "react-native";
import Modal from "react-native-modal";

import { CreateScheduleCard } from '../components';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class ScheduleNavigationScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalVisible: false,
      }
    }

    handleAdditionSubmit = ({endDate, startDate, name, description }) => {
      this._toggleModal();
      console.log(endDate, startDate, name, description)
    };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

    _renderContent = ({content}) => {
      return (
        <View style={styles.accordionContent}>
          <Text
            style={{flex: 6}}
          >
            {content}
          </Text>
          <Button
            style={{flex: 1, justifyContent: 'center'}}
          >
            <Icon name='arrow-forward' />
          </Button>
        </View>
      )};

    render() {
        return (
          <Container style={{flex:1}}>
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

export default ScheduleNavigationScreen;