import React, {Component} from 'react';
import { View } from 'react-native';
import { Text, Title } from 'native-base';


class ScheduleScreen extends Component {
    render() {
        const data = this.props.data || 'No Data';
        return (
            <View>
                <Text>{data}</Text>
            </View>
    )
        ;
    }
}

export default ScheduleScreen;