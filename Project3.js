import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Button = ({ text, onPress, buttonStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#ff637c',
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      ...buttonStyle
    }}
  >
    <Text style={{ color: '#fff' }}>{text}</Text>
  </TouchableOpacity>
);

const Project3 = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Button text="Say hello" onPress={() => alert('hello!')} />
    <Button
      text="Say goodbye"
      onPress={() => alert('goodbye!')}
      buttonStyle={{ backgroundColor: '#4dc2c2' }}
    />
  </View>
);

export default Project3;