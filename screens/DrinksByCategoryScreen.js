import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { getCocktailsByCategory }  from '../api/api';
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import SearchMasonry from '../components/search/SearchMasonry';



const App = ({navigation,route}) => {
  const {category} = route.params;
  const [categories, setCategories] = useState([]);
  const [fullInfo, setFullInfo] = useState([]);
  const [cocktailsByCategory, setCocktailByCategory] = useState([]); 
  useEffect(() => {
    getCocktailsByCategory(category)
    .then(drinks => setCocktailByCategory(drinks))
    .catch(error => console.log(error))
  
  }, []);
  return (
      <View style={styles.container}>
      <MainHeader title="Cocktails"/>
      <SearchMasonry list={cocktailsByCategory} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
  })
export default App;