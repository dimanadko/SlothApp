import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text, Button, Input, Item, DatePicker,} from 'native-base';
import {Alert, StyleSheet, View} from "react-native";
class GanttChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      releaseDate: new Date(),
      dueDate: new Date(),
      processingTime: 0,
      weight: 0,
    }
  }

  render() {
    const { tasks } = this.props;
    return (
      <View style={styles.container}>
        {tasks.map( ({name, weight, dueDate, releaseDate, processingTime})=> (
          <Text>{name + weight + dueDate + releaseDate + processingTime}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

export default GanttChart;