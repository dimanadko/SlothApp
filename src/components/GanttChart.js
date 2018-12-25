import React, { Component } from 'react';
import {Container, Header, Content, Card, CardItem, Body, Text, Button, Input, Item, DatePicker,} from 'native-base';
import {Alert, StyleSheet, View, ScrollView} from "react-native";

const day = 60 * 60 * 24 * 1000;

class GanttChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {scheduleData} = this.props;
    const {tasks, releaseDate, dueDate} = scheduleData;
    const scheduleReleaseDate = new Date(releaseDate);
    const scheduleDueDate = new Date(dueDate);
    // Alert.alert((scheduleReleaseDate instanceof Date) + '');
    const scheduleLength = scheduleDueDate - scheduleReleaseDate;

    const days = Math.floor((scheduleDueDate - scheduleReleaseDate) / day);
    // Alert.alert(days);
    this.daysArray = Array.from({length: days}, (v, k) => k+1);


    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          {tasks.map(({name, weight, dueDate, releaseDate, processingTime, startDate=false, endDate=false}) => {
            const taskDueDate = new Date(dueDate);
            const taskReleaseDate = new Date(releaseDate);
            const placeHolderStart = Math.round(((taskReleaseDate - scheduleReleaseDate)/scheduleLength)*100);
            const placeHolderMain = Math.round(((taskDueDate - taskReleaseDate)/scheduleLength)*100);
            const placeHolderEnd = Math.round(((scheduleDueDate-taskDueDate)/scheduleLength)*100);

            return (
              <View key={name} style={{height: 50, flexDirection: 'row', backgroundColor: 'green'}}>
                <View style={{flex:placeHolderStart}}/>
                <View style={{backgroundColor: startDate?'blue':'mistyrose', flex: placeHolderMain}}>
                  <Text style={{textAlign: 'center', flex: 1}}>{name}</Text>
                </View>
                <View style={{flex:placeHolderEnd}}/>
              </View>
            )
          })}
        </View>
        <View style={styles.timeline}>
          <View style={{flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}/>
          <View style={styles.timelineLabelContainer}>
            {this.daysArray.map((el, index) => {
              return (
                <Text style={{flex: 1}} key={el}>
                  {(scheduleReleaseDate.getDate() + index) + '.' + (scheduleReleaseDate.getMonth() + 1)}
                </Text>
              )})
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'lightblue',
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  timeline: {
    height: 30,
    // alignItems: 'stretch',
    backgroundColor: 'ivory',
  },
  timelineLabelContainer: {
    flex: 6,
    flexDirection: 'row',
  },
});

export default GanttChart;