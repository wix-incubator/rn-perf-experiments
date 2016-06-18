import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch
} from 'react-native';

import PanResponderExample from './a-pan-responder';
import PanResponderDirectExample from './b-pan-responder-direct';
import NativeExample from './c-native';
import AnimatedLibExample from './d-animated-lib';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: undefined,
      simulateHeavyRender: true,
      simulateBusyBridge: true
    };
  }
  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return (
        <Example
          simulateHeavyRender={this.state.simulateHeavyRender}
          simulateBusyBridge={this.state.simulateBusyBridge}
        />
      );
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: PanResponderExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Pan Responder
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: PanResponderDirectExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Pan Responder with Direct Manipulation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: NativeExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            Native Container
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: AnimatedLibExample})}>
          <Text style={{color: 'blue', fontSize: 17, marginBottom: 20}}>
            JS with Animated Library
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{alignSelf: 'center', marginRight: 10}}>Simulate heavy render function</Text>
          <Switch value={this.state.simulateHeavyRender} onValueChange={(val) => this.setState({simulateHeavyRender: val})} />
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{alignSelf: 'center', marginRight: 10}}>Simulate busy bridge every 1 sec</Text>
          <Switch value={this.state.simulateBusyBridge} onValueChange={(val) => this.setState({simulateBusyBridge: val})} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('example', () => example);
