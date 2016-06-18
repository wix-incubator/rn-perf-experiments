import React, { Component } from 'react';
import { PanResponder, Animated, View, Dimensions } from 'react-native';

const dragOffsetForTransparency = 0.8 * Dimensions.get('window').width;

export default class SwipeableAnimatedLib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerTranslateX: new Animated.Value(0)
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([null, {
        dx: this.state.containerTranslateX
      }]),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(this.state.containerTranslateX, {toValue:0}).start();
      }
    });
  }
  render() {
    // start simulate a heavy render function
    if (this.props.simulateHeavyRender) for (let i=0; i<(1e7); i++) {}
    // end simulate a heavy render function
    return (
      <Animated.View {...this.panResponder.panHandlers}
        style={{
          opacity: this.state.containerTranslateX.interpolate({
            inputRange: [-dragOffsetForTransparency, 0, dragOffsetForTransparency],
            outputRange: [0, 1, 0],
          }),
          transform: [{translateX: this.state.containerTranslateX}]
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
