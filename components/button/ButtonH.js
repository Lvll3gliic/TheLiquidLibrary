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
    fontColor: "red",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,

    backgroundColor: '#000000',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ButtonH;