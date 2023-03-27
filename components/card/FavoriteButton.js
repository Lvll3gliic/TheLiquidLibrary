import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, shadow, sizes} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'

const FavoriteButton = ({active, style, onPress}) => {
  return (
    <Ionicons
      containerStyle={style}
      viewStyle={styles.view}
      onPress={onPress}
      name={active ? 'heart' : 'heart-outline'}
      size={24}
    />
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    padding: 4,
    borderRadius: sizes.radius,
    ...shadow.light,
  },
});

export default FavoriteButton;