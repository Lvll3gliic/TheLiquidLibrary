import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HeartButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <MaterialIcons name="favorite" size={45} color="red" />
    </TouchableOpacity>
  );
};



export default HeartButton;
