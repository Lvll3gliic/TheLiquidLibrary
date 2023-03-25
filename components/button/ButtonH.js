import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonH = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F16268',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
});

export default ButtonH;