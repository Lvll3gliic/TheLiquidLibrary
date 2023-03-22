import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { getCategoryList, getFullInfoById }  from './api';
import React, { useState, useEffect } from 'react';



const App = () => {
  const [categories, setCategories] = useState([]);
  const [fullInfo, setFullInfo] = useState([]);
  useEffect(() => {
    
    getCategoryList()
    .then(categories => setCategories(categories))
    .catch(error=>console.log(error));

    getFullInfoById(11007)
      .then(fullInfo => setFullInfo(fullInfo))
      .catch(error => console.log(error));
  }, [cocktailId = 11007]);

  return (
      <View>
        <Text>test</Text>
        <Text>{fullInfo.strDrink}</Text>
        <Text>{fullInfo.strCategory}</Text>
        <Text>{fullInfo.strInstructions}</Text>
      </View>
    );
  };

export default App;