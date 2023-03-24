
import { StyleSheet, Text, View , Image} from 'react-native';

import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';



const App = () => {
  
  useEffect(() => {
  
  }, []);

  return (
      <View>
        <MainHeader title="Favorites"/>
        <Text>Favorites screen</Text>
       
      </View>
    );
  };

export default App;