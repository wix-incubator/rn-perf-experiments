import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

const RNSwipeableContainer = requireNativeComponent('RNSwipeableContainer', null);

export default class SwipeableNative extends Component {
  render() {
    // start simulate a heavy render function
    if (this.props.simulateHeavyRender) for (let i=0; i<(1e7); i++) {}
    // end simulate a heavy render function
    return (
      <RNSwipeableContainer>
        {this.props.children}
      </RNSwipeableContainer>
    );
  }
}
