import React, { Component } from 'react';
import {Alert} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body, Text, Button, Input, Item, DatePicker,} from 'native-base';
class CreateTaskCard extends Component {
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

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  };

  setReleaseDate = (newDate)  => {
    this.setState({ releaseDate: new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0).toString() });
  };

  setDueDate = (newDate)  => {
    this.setState({ dueDate: new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0).toString() });
  };
  
  render() {
    return (
      <Container style={{flex: 1}}>
        <Card style={{flex: 1}}>
          <CardItem style={{flex: 1}}>
            <Body>
            <Item floatingLabel style={{flex: 1, alignItems: 'center'}}>
              <Input
                placeholder="Name"
                onChangeText={(name) => this.setState({name})}
              />
            </Item>
            <Item style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
              <DatePicker
                style={{flex: 1}}
                defaultDate={new Date()}
                locale={"en"}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Start date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setReleaseDate}
              />
              <DatePicker
                style={{flex: 1}}
                defaultDate={new Date()}
                locale={"en"}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="End date"
                textStyle={{ color: "red" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDueDate}
              />
            </Item>
            <Item floatingLabel style={{flex: 1, alignItems: 'space-between'}}>
              <Input
                placeholder="Weight"
                onChangeText={(weight) => this.setState({weight})}
              />
            </Item>
            <Item floatingLabel style={{flex: 1, alignItems: 'space-between'}}>
              <Input
                placeholder="Processing Time"
                onChangeText={(processingTime) => this.setState({processingTime})}
              />
            </Item>
            <Button
              onPress={this.handleSubmit}
            >
              <Text>Submit</Text>
            </Button>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

export default CreateTaskCard;