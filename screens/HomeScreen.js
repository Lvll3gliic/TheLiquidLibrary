import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import React, { useState, useEffect } from 'react';



const App = () => {
  
  useEffect(() => {
    
    getCategoryList()
    .then(categories => setCategories(categories))
    .catch(error=>console.log(error));

    getFullInfoById(11007)
      .then(fullInfo => setFullInfo(fullInfo))
      .catch(error => console.log(error));
  
  
   getRandomDrink()
  .then(drink => setRandomDrink(drink))
  .catch(error => console.log(error))
    
  getRandomDrink()
  .then(drink => setRandomDrink(drink))
  .catch(error => console.log(error))

  getCocktailsByName("screwdriver")
  .then(drinks => setCocktailsByName(drinks))
  .catch(error => console.log(error))
  
  getCocktailsByCategory("cocktail")
  .then(drinks => setCocktailByCategory(drinks))
  .catch(error => console.log(error))



},[]);


  return (
      <View>
        <Text>test</Text>
        <Text>{fullInfo.strDrink}</Text>
        <Text>{fullInfo.strCategory}</Text>
        <Text>{fullInfo.strInstructions}</Text>
        <Text>RANDOM</Text>
        <Text>{randomDrink.strDrink}</Text>
        <Text>SEARCH</Text>
        {cocktailsByCategory.map((drink, index) => (
        <View key={index}>
          <Text>{drink.strDrink}</Text>
        
        
        </View>
      ))}
      </View>
    );
  };

export default App;