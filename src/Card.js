import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <Image
        source={{uri: "http://loremflickr.com/320/240/nature?random=" + this.props.title}}
        style={{width: 320, height: 240, marginVertical: 10, borderRadius: 10, borderColor: '#cccccc', borderWidth: 1, justifyContent: 'flex-end'}}>
        <View style={{backgroundColor: '#00000080', height: 70, justifyContent: 'center'}}>
          <Text style={{color: 'white', marginLeft: 30, fontSize: 28, fontWeight: '300'}}>
            {this.props.title}
          </Text>
        </View>
      </Image>
    );
  }
}
