
import { StyleSheet, Text, View , Image, Button, TextInput} from 'react-native';
import React, { useRef, useState, useEffect} from 'react';
import Tabs from '../components/search/Tabs'
import SearchMasonry from '../components/search/SearchMasonry';
import { getCocktailsByName } from '../api/api';
import MainHeader from '../components/MainHeader';
import {colors, spacing, sizes, shadow} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'


const filterCocktailsByAlcohol = (cocktails, alc) => {
  const filteredCocktails = cocktails.filter(cocktail => cocktail.strAlcoholic === alc);
  return filteredCocktails;
}
const SearchScreen = () => {
  const tabs=[
    {
      title:"All",
      content: ()=><SearchMasonry list={cocktailByName} />
    },
    {
      title:"Alcoholic",
      content: ()=><SearchMasonry list={alcCoctails} />
    },
    {
      title:"Non-alcoholic",
      content: ()=><SearchMasonry list={nonAlcCocktails} />
    }
  ]
  
  const [cocktailByName, setCocktailsByName] = useState([]);
  const [alcCoctails, setAlcCocktails] = useState([]);
  const [nonAlcCocktails, setNonAlcCocktails] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [search, setSearch] = useState('');
  const [showError, setShowError] = useState(false);
  const [text, setText] = useState('');
 


  const delay = 300; // delay in milliseconds
  const timeoutIdRef = useRef(null);
  const handleSearch=({value})=>{
   
    getCocktailsByName(`${value}`)
    .then((drinks)=>{
      if(drinks && drinks.length >0){
        setShowError(false);
        setCocktailsByName(drinks)
        setAlcCocktails(filterCocktailsByAlcohol(drinks, 'Alcoholic'))
        setNonAlcCocktails(filterCocktailsByAlcohol(drinks, 'Non alcoholic'))  
      }else{
        setShowError(true);
        console.log("neatrada" + value)
      }
    })
    .catch(error => console.log(error))  
  

  }
  useEffect(() => {

  }, []);

  const handleInputChange = (text) => {
    setText(text);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      handleSearch({ value: text });
    }, delay);
  };
  return (
    <View style={styles.container}>
      
      <MainHeader title="Search"/>
      <View style={styles.container1}>
        <View style={styles.inner}>
            <View style={styles.search} pointerEvents="none">
                <Ionicons name= 'search' size={25} />
            </View>
            <TextInput 
            style={styles.field} 
            placeholder="Search" 
            value={text}
            onChangeText={handleInputChange}/>
        
        </View>
    </View>
      <Tabs items={tabs} onSelect={setSelectedTab} />
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