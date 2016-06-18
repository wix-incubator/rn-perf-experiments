import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from './src/Card';
import SwipeableNative from './src/SwipeableNative';
import BridgeNoiseMaker from './src/BridgeNoiseMaker';

export default class NativeExample extends Component {
  render() {
    return (
      <View style={styles.container}>

        <SwipeableNative simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='The Winds of Winter' />
        </SwipeableNative>
        <SwipeableNative simulateHeavyRender={this.props.simulateHeavyRender}>
          <Card title='A Dream of Spring' />
        </SwipeableNative>

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
