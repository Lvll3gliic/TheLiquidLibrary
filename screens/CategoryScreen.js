
import { StyleSheet, Text, View , Image, Button} from 'react-native';
import { getCategoryList, getFullInfoById }  from '../api/api';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';



const App = () => {
  const navigation = useNavigation();
  const category = "cocktail"
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    
    getCategoryList()
    .then(categories => setCategories(categories))
    .catch(error=>console.log(error));
  }, []);

  return (
      <View>
        <MainHeader title="Category"/>
        <Text>CATEGORY SCREEN </Text>
        <Text>rn its passing "cocktail" as a category</Text>
        <Ionicons name= 'remove-circle' size={100} onPress={() => {
                  navigation.navigate('DrinksByCategoryScreen', { category: category});
                  
                }} />
      </View>
    );
  };



export default App;