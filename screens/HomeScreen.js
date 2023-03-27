
import { StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import {getRandomDrink }  from '../api/api';
import React, { useState, useEffect } from 'react';
import MainHeader from '../components/MainHeader';
import {useNavigation} from '@react-navigation/native';
import ButtonH from '../components/button/ButtonH';



const App = () => {
  const [fullInfo, setFullInfo] = useState([]);

  useEffect(() => {
    getRandomDrink()
     .then(fullInfo => setFullInfo(fullInfo))
      .catch(error => console.log(error));

},[]);

const navigation = useNavigation();
let imageUrl = fullInfo.strDrinkThumb;

  return (
      <View >
        <MainHeader title="Home"/>

      <ScrollView style={styles.container}>
        
        <View style={styles.containerCard}>
          <Text style={styles.drinkName}>{fullInfo.strDrink}</Text>

          <Image
            style={styles.image}
            source={{ uri: imageUrl}}
          />

          <Text style={styles.otherText}>THE MAIN INGREDIENTS</Text>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredient}>{fullInfo.strIngredient1}</Text>
            <Text style={styles.ingredient}>{fullInfo.strIngredient2}</Text>
            {
            ( fullInfo.strIngredient3 &&
              <Text style={styles.ingredient}>{fullInfo.strIngredient3}</Text>
            )}
          </View>

            <ButtonH
              title="Refresh Me!"     
              onPress={() => getRandomDrink()
                .then(fullInfo => setFullInfo(fullInfo))
                .catch(error => console.log(error))}
            />
            

            <ButtonH
              title="Craft Your Beverage!"
              onPress={() => {
                navigation.navigate('RecipeScreen', { recipeId: fullInfo.idDrink});
              }}
            />
        </View>
        </ScrollView>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      margin: "5%",
      backgroundColor: 'white',
      borderRadius: 10,
      height: "85%",
    },
    containerCard: {
      flex: 1,
      alignItems: 'center',
      margin: "5%",
      backgroundColor: 'white',
      borderRadius: 10,
      height: "85%",
      width: "95%",
    },
    image: {
      width: 250,
      height: 250,
      marginBottom: 24,
      borderRadius: 10,
    },
    drinkName: {
      fontSize: 40,
      textAlign: "center",
      fontWeight: 'bold',
      marginBottom: 5,
    },
    otherText: {
      fontWeight: "bold",
      fontSize:20,
      marginBottom: 6,
    },
    ingredientsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
    },
    ingredient: {
      backgroundColor: '#efefef',
      borderRadius: 4,
      padding: 6,
      marginRight: 8,
      marginBottom: 8,
    },
    
  });

export default App;