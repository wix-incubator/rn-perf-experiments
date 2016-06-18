import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './src/Card';
import SwipeableAnimatedLib from './src/SwipeableAnimatedLib';
import BridgeNoiseMaker from './src/BridgeNoiseMaker';

export default class AnimatedLibExample extends Component {
  render() {
    return (
      <View style={styles.container}>

        <SwipeableAnimatedLib simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='The Winds of Winter' />
        </SwipeableAnimatedLib>
        <SwipeableAnimatedLib simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='A Dream of Spring' />
        </SwipeableAnimatedLib>

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
