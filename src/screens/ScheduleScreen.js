import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, Title } from 'native-base';
import { connect } from 'react-redux'


class ScheduleScreen extends Component {
    render() {
        const { schedules } = this.props;
        // const data = this.props.data || 'No Data';
        const title = this.props.title || 'No title';
        const scheduleData = schedules.find( el => el.name === title);
        return (
            <View>
                <Text>{scheduleData.description}</Text>
                <Text>{scheduleData.startDate}</Text>
                <Text>{scheduleData.endDate}</Text>
            </View>
    )
        ;
    }
}

export default connect(state => ({schedules: state.manageSchedules.schedules}), () => ({}))(ScheduleScreen);