import React, {Component} from 'react';
import { Container, Text, Title, Header, Button, Body, Card, CardItem, Form, Label, Input, Item, DatePicker } from "native-base";
import {StyleSheet, View, Alert } from "react-native";

class CreateScheduleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dueDate: new Date(),
      releaseDate: new Date(),
      name: '',
      description: '',
    };
  }

  setStartDate = (newDate)  => {
    this.setState({ releaseDate: newDate.toString() });
  };

  setEndDate = (newDate)  => {
    this.setState({ dueDate: newDate.toString() });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  };

  render() {
    return (
      <Container>
        <Card style={styles.card}>
          <CardItem style={{flex: 1, flexDirection: 'row'}}>
            <Body style={{flex: 1, alignItems: 'stretch'}}>
              <Header>
                <Title style={{textAlign: 'center'}}>
                  Create Schedule
                </Title>
              </Header>
              <Form style={{flex: 15}}>
                <Item floatingLabel style={{flex: 2 }}>
                  <Label>Name</Label>
                  <Input onChangeText={(name) => this.setState({name})}/>
                </Item>
                <Item floatingLabel last style={{flex: 2 }}>
                  <Label>Description</Label>
                  <Input onChangeText={(description) => this.setState({description})}/>
                </Item>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                  <DatePicker
                    defaultDate={new Date()}
                    locale={"en"}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Start date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setStartDate}
                  />
                  <DatePicker
                    defaultDate={new Date()}
                    locale={"en"}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="End date"
                    textStyle={{ color: "red" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setEndDate}
                  />
                </View>
              </Form>
              <Button onPress={this.handleSubmit} style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
                <Text style={{flex: 1, textAlign: 'center'}}>Submit</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
      ;
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});

export default CreateScheduleCard;