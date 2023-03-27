
import { StyleSheet, Text, View , Image, Button} from 'react-native';
import { getCategoryList, getFullInfoById }  from '../api/api';
import {useNavigation} from '@react-navigation/native';

import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import CategoryList from '../components/category/CategoryList';



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
      <View style={styles.container}>
      <MainHeader title="Categories"/>
      <CategoryList list={categories} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
  })



export default App;