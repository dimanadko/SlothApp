import React, {Component} from 'react';
import { Container, Content, Accordion, Text, Button, Icon, Fab } from "native-base";
import {StyleSheet, View } from "react-native";
import { Actions } from 'react-native-router-flux';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

class ScheduleNavigationScreen extends Component {

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

    handleAdd = () => {
      Actions.scheduleFormScreen()
    };

    render() {
        return (
          <Container>
              <Content padder>
                <View style={{flex:1, height: 600}}>
                  <Accordion dataArray={dataArray} renderContent={this._renderContent} />
                  <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={this.handleAdd}>
                    <Icon name="ios-add" />
                  </Fab>
                </View>
              </Content>
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