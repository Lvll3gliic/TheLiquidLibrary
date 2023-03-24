import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {sizes, spacing} from '../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    
    <View style={[styles.container, {marginTop: insets.top}]}>
        {(() => {
      if (title==="Recipe" || title==="Cocktails") {
        return <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={25}></Ionicons>
        </TouchableOpacity>
      }else{
        return <Text></Text>
      }
    })()}
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.l/2,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    
  },
  
});

export default MainHeader;