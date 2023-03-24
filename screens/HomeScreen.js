
import { StyleSheet, Text, View , Image} from 'react-native';
import { getCategoryList, getFullInfoById, getRandomDrink, getCocktailsByName, getCocktailsByCategory }  from '../api/api';
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';



const App = () => {
 
  useEffect(() => {


},[]);


  return (
      <View>
        
        <MainHeader title="Home"/>
        <Text>Home/random Screen</Text>
      </View>
    );
  };

export default App;