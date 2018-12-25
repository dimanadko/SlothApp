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
    const scheduleLength = scheduleDueDate - scheduleReleaseDate;

    const days = Math.floor((scheduleDueDate - scheduleReleaseDate) / day);
    this.daysArray = Array.from({length: days}, (v, k) => k+1);


    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          {tasks.map(({name, weight, dueDate, releaseDate, processingTime, startDate=false, endDate=false}) => {
            const taskDueDate = new Date(dueDate);
            const taskReleaseDate = new Date(releaseDate);

            const taskLength = taskDueDate - taskReleaseDate;
            const taskStartDate = startDate && new Date(startDate);
            const taskEndDate = endDate && new Date(endDate);

            const placeHolderStart = Math.round(((taskReleaseDate - scheduleReleaseDate)/scheduleLength)*100);
            const placeHolderMain = Math.round(((taskDueDate - taskReleaseDate)/scheduleLength)*100);
            const placeHolderEnd = Math.round(((scheduleDueDate-taskDueDate)/scheduleLength)*100);

            const innerPlaceHolderStart = startDate && Math.round(((taskStartDate - taskReleaseDate)/taskLength)*100);
            const innerPlaceHolderMain = startDate && Math.round(((taskEndDate - taskStartDate)/taskLength)*100);
            const innerPlaceHolderEnd = startDate && Math.round(((taskDueDate-taskEndDate)/taskLength)*100);

            return (
              <View key={name} style={{height: 50, flexDirection: 'row', borderTopColor: 'darkgrey', borderTopWidth: 1}}>
                <Text
                  style={{
                    textAlign: 'center',
                    width: 40, fontSize: 10,
                    borderRightColor: 'darkgrey',
                    borderRightWidth: 1,
                    backgroundColor: 'lightgrey'
                  }}>{name}</Text>
                <View style={{flex:placeHolderStart}}/>
                <View style={{borderColor: 'coral', borderStyle: 'dashed', borderWidth: 1, flex: placeHolderMain, flexDirection: 'row'}}>
                  { startDate && endDate ? (
                    <>
                      <View style={{flex:innerPlaceHolderStart}}/>
                      <View style={{flex:innerPlaceHolderMain, backgroundColor: 'mistyrose' }}/>
                      <View style={{flex:innerPlaceHolderEnd}}/>
                    </>
                  ):
                    <>
                    </>
                  }
                </View>
                <View style={{flex:placeHolderEnd}}/>
              </View>
            )
          })}
        </View>
        <View style={styles.timeline}>
          <View style={{flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgrey'}}/>
          <View style={styles.timelineLabelContainer}>
            <Text style={{width: 40}}>Date</Text>
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