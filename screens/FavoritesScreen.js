
import { StyleSheet, Text, View , Image} from 'react-native';
import {auth} from '../components/firebase'
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import {db, database} from '../components/firebase'
import { collection, getDocs, addDoc, doc, onSnapshot } from "firebase/firestore";
import { onValue, ref, getDatabase} from 'firebase/database';





const FavoritesScreen = () => {
 
  const [savedRecipeIds, setSavedRecipeIds] = useState([]);
  useEffect(() => {
    const userId = auth.currentUser.uid;

    // Listen for changes in the user's saved recipe IDs

    const database = getDatabase()
    const reference = ref(database, `users/`+ userId)
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      setSavedRecipeIds(data);
      console.log(data.savedRecipesIds[0])
    });
    // const savedRecipeIdsRef = firebase.database().ref(`users/${userId}/savedRecipeIds`);
    // savedRecipeIdsRef.on('value', (snapshot) => {
    //   const data = snapshot.val() || [];
    //   setSavedRecipeIds(data);
    // });

  onSnapshot
  }, []);

  // Use savedRecipeIds to load corresponding recipes
  // ...

  return (
      <View>
        <MainHeader title="Favorites"/>
        <Text>Favorites screen</Text>
       
      </View>
    );
  };

export default FavoritesScreen;