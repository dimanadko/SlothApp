import React, {Component} from 'react';
import { Container, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Image, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
    };
  }
  onSwipeUp = () => {
    this.setState({myText: 'You swiped up!'});
    Actions.scheduleNavigationScreen();
  };

  render() {
        return (
          <GestureRecognizer
            style={{flex: 1}}
            onSwipeUp={this.onSwipeUp}
          >
            <Container>
                <View style={styles.container}>
                  <View style={styles.logoContainer}>
                    <Image
                      source={require('../icons/sloth.png')}
                      style={styles.logo}
                    />
                  </View>
                  <View style={styles.welcomeContainer}>
                    <Text style={styles.welcome}>
                      Welcome to Sloth App
                    </Text>
                  </View>
                  <View style={styles.instructionsContainer}>
                    <Text style={styles.instructions}>
                      {this.state.myText}
                    </Text>
                  </View>
                </View>
            </Container>
         </GestureRecognizer>
    )
        ;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  logo: {
  },
  logoContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default WelcomeScreen;