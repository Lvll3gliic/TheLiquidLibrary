
import { StyleSheet, Text, View , Image} from 'react-native';
import { getCategoryList, getFullInfoById, getRandomDrink, getCocktailsByName, getCocktailsByCategory }  from '../api/api';
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
      <View style={styles.container}>
        
        <MainHeader title="Home"/>
        
        <View style={styles.containerCard}>
          <Text style={styles.drinkName}>{fullInfo.strDrink}</Text>

          <Image
            style={styles.image}
            source={{ uri: imageUrl}}
          />

          <Text style={styles.otherText}>The main ingredients:</Text>

          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredient}>{fullInfo.strIngredient1}</Text>
            <Text style={styles.ingredient}>{fullInfo.strIngredient2}</Text>
            <Text style={styles.ingredient}>{fullInfo.strIngredient3}</Text>
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

      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
    },
    containerCard: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
      margin: "5%",
      backgroundColor: 'white',
      borderRadius: 10,
      height: "85%",
      width: "95%",
    },
    image: {
      width:200,
      height:200,
      marginBottom: 24,
      borderRadius: 5,
    },
    drinkName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    otherText: {
      fontSize: 16,
      fontWeight: 'bold',
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