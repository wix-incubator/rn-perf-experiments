import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './src/Card';
import SwipeablePanResponder from './src/SwipeablePanResponder';
import BridgeNoiseMaker from './src/BridgeNoiseMaker';

export default class PanResponderExample extends Component {
  render() {
    return (
      <View style={styles.container}>

        <SwipeablePanResponder simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='The Winds of Winter' />
        </SwipeablePanResponder>
        <SwipeablePanResponder simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='A Dream of Spring' />
        </SwipeablePanResponder>

        {this.props.simulateBusyBridge ? <BridgeNoiseMaker /> : false }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
