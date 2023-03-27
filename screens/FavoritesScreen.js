import { StyleSheet, View , Alert} from 'react-native';
import {auth} from '../components/firebase'
import React, { useState, useEffect, TouchableOpacity } from 'react';
import MainHeader from '../components/MainHeader';

import { onValue, ref, getDatabase, push, set, update, get} from 'firebase/database';
import Tabs from '../components/search/Tabs'
import SearchMasonry from '../components/search/SearchMasonry';
import { getFullInfoById } from '../api/api';



const filterCocktailsByAlcohol = (cocktails, alc) => {
  const filteredCocktails = cocktails.filter(cocktail => cocktail.strAlcoholic === alc);
  return filteredCocktails;
}


export const addToDatabase = async (newValue) =>{
  try {
    const database = getDatabase();
    const userId = auth.currentUser.uid;
    const reference = ref(database, `users/${userId}/savedRecipesIds`);

    // Get current values from database
    const snapshot = await get(reference);
    const savedRecipeIds = [];
    snapshot.forEach((childSnapshot) => {
      savedRecipeIds.push(childSnapshot.val());
    });

    // Check if value already exists in database
    if (!savedRecipeIds.includes(newValue)) {
      await push(reference, newValue);
      Alert.alert("Cocktail successfully added to favorites!")
    } else {
      Alert.alert("This cocktail is already in your favorites list!")
    }
  } catch (error) {
    Alert.alert("Something went wrong.. try again!");
  }
}

const FavoritesScreen = () => {
    const tabs=[
      {
        title:"All",
        content: ()=><SearchMasonry list={cocktailById} />
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
  const [recipes, setSavedRecipeIds] = useState([]);
  const [selectedTab, setSelectedTab] = useState({});
  const [cocktailById, setCocktailsById] = useState([]);
  const [alcCoctails, setAlcCocktails] = useState([]);
  const [nonAlcCocktails, setNonAlcCocktails] = useState([]);

  useEffect(() => {
    const userId = auth.currentUser.uid;

    // Listen for changes in the user's saved recipe IDs

    const database = getDatabase()
    const reference = ref(database, `users/${userId}/savedRecipesIds`);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      const recipeData = data ? Object.values(data) : [];
      console.log(recipeData)
      setSavedRecipeIds(recipeData)
     
    });
    
  }, []);

  useEffect(() => {
    const loadCocktails = async () => {
      const fullInfo = await Promise.all(recipes.map(id => getFullInfoById(id)));
      setCocktailsById(fullInfo);
      setAlcCocktails(filterCocktailsByAlcohol(fullInfo, 'Alcoholic'))
      setNonAlcCocktails(filterCocktailsByAlcohol(fullInfo, 'Non alcoholic'))
      setSelectedTab({
        title: "All",
        content: () => <SearchMasonry list={fullInfo} />
      });
    };

    if (recipes.length) {
      loadCocktails();
    }
  }, [recipes]);

  return (
    <View style={styles.container}>
      
      <MainHeader title="Favorites"/>
      {selectedTab.title && (
        <Tabs items={tabs} onSelect={setSelectedTab} initialSelected={selectedTab} />
      )}

     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritesScreen;