import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { getCategoryList, getFullInfoById }  from '../api/api';
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';



const RecipeScreen = ({navigation, route}) => {
  const {recipeId} = route.params;
  const [fullInfo, setFullInfo] = useState([]);
  useEffect(() => {
    
    getFullInfoById(recipeId)
      .then(fullInfo => setFullInfo(fullInfo))
      .catch(error => console.log(error));
  }, []);

  return (
      <View>
        <MainHeader title="Recipe"/>
        <Text>test</Text>
        <Text>{fullInfo.strDrink}</Text>
        <Text>{fullInfo.strCategory}</Text>
        <Text>{fullInfo.strInstructions}</Text>
      </View>
    );
  };

export default RecipeScreen;