import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

const numBitsInCounter = 75;
const bitViewSize = Dimensions.get('window').width / numBitsInCounter;

function getRandomInt(min = 0, max = 1 << 31) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class BridgeNoiseMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }
  render() {
    const bitValues = [];
    for (let i = 0; i < numBitsInCounter; i++) {
      bitValues.push(this.state.counter & (1 << i));
    }
    setTimeout(() => {
      this.setState({
        counter: getRandomInt()
      });
    }, 1000);
    return (
      <View style={{position: 'absolute', bottom: 0, width: Dimensions.get('window').width, height: bitViewSize}}>
        {bitValues.map((bit, i) => (
          <View key={i} style={{
            width: bitViewSize,
            height: bitViewSize,
            backgroundColor: bit ? 'red' : 'green',
            position: 'absolute',
            left: i * bitViewSize,
            top: 0
          }} />
        ))}
      </View>
    );
  }
}
