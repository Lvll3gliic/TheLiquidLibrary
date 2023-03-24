
import { StyleSheet, Text, View , Image, Button, TextInput} from 'react-native';
import React, { useState, useEffect} from 'react';
import Tabs from '../components/search/Tabs'
import SearchMasonry from '../components/search/SearchMasonry';
import { getCocktailsByName } from '../api/api';
import MainHeader from '../components/MainHeader';
import {colors, spacing, sizes, shadow} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchScreen = () => {
  const tabs=[
    {
      title:"All",
      content: ()=><SearchMasonry list={cocktailByName} />
    },
    {
      title:"Alcoholic",
      content: ()=><SearchMasonry list={cocktailByName} />
    },
    {
      title:"Non-alcoholic",
      content: ()=><SearchMasonry list={cocktailByName} />
    }
  ]
  const filterCocktailsByIngredient = (cocktails, alc) => {
    const filteredCocktails = cocktails.filter(cocktail => cocktail.strAlcoholic === alc);
    return filteredCocktails;
  }
  const [cocktailByName, setCocktailsByName] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [search, setSearch] = useState('');
  const [test, setTest] = useState('');
  const [showError, setShowError] = useState(false);
  const handleSearch=({value})=>{
   
    getCocktailsByName(`${value}`)
    .then((drinks)=>{
      if(drinks && drinks.length >0){
        setShowError(false);
        setCocktailsByName(drinks)
        
      }else{
        setShowError(true);
        console.log("neatrada")
      }
    })
    .catch(error => console.log(error))  
  

  }
  useEffect(() => {

  }, []);

 
  return (
    <View style={styles.container}>
      
      <MainHeader title="Search"/>
      <View style={styles.container1}>
        <View style={styles.inner}>
            <View style={styles.search} pointerEvents="none">
                <Ionicons name= 'menu' size={25} />
            </View>
            <TextInput 
            style={styles.field} 
            placeholder="Search" 
            value={search}
            onChangeText={setSearch}/>
        <View style={styles.filter}>
                <Ionicons name= 'search' size={25} onPress={() => {
                  handleSearch({value: search})
                  
                }} />
          </View>
        </View>
    </View>
    {showError ? (
        <Text>No results found.</Text>
      ) :(
      <Tabs items={tabs} onSelect={setSelectedTab}/>
  
      )}
    </View>
    );
  };
  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    container1: {
      paddingHorizontal: spacing.l,
      paddingTop: spacing.l,
      paddingBottom: spacing.l / 1.5,
    },
    inner: {
      flexDirection: 'row',
    },
    search: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
    },
    field: {
      backgroundColor: colors.white,
      paddingLeft: spacing.xl + spacing.s,
      paddingRight: spacing.m,
      paddingVertical: spacing.m,
      borderRadius: sizes.radius,
      height: 54,
      flex: 1,
      ...shadow.light,
    },
    filter: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },


  })

export default SearchScreen;