import React, { Component } from 'react';
import { PanResponder, View, Dimensions } from 'react-native';

const dragOffsetForTransparency = 0.8 * Dimensions.get('window').width;

export default class SwipeablePanResponderDirect extends Component {
  constructor(props) {
    super(props);
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.updateStyleBasedOnDeltaX(gestureState.dx);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.updateStyleBasedOnDeltaX(0);
      }
    });
  }
  updateStyleBasedOnDeltaX(dx) {
    let opacity = 1 - Math.abs(dx) / dragOffsetForTransparency;
    if (opacity < 0) opacity = 0;
    this.setContainerStyles(opacity, dx);
  }
  setContainerStyles(opacity, translateX) {
    this.refs['container'].setNativeProps({style: {
      opacity: opacity,
      transform: [{translateX: translateX}]
    }});
  }
  render() {
    // start simulate a heavy render function
    if (this.props.simulateHeavyRender) for (let i=0; i<(1e7); i++) {}
    // end simulate a heavy render function
    return (
      <View {...this.panResponder.panHandlers} ref='container'>
        {this.props.children}
      </View>
    );
  }
}
