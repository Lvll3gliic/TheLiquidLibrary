
  import { StyleSheet, Text, View , Image,ScrollView,Platform} from 'react-native';
  import {  getFullInfoById }  from '../api/api';
  import React, { useState, useEffect, } from 'react';
  import MainHeader from '../components/MainHeader';
  import HeartButton from '../components/button/HeartButton';
  import { addToDatabase } from './FavoritesScreen';



  const RecipeScreen = ({navigation, route}) => {
    const {recipeId} = route.params;
    const [fullInfo, setFullInfo] = useState({});
    useEffect(() => {
      getFullInfoById(recipeId)
        .then(fullInfo => setFullInfo(fullInfo))
        .catch(error => console.log(error));
    }, []);

    function IngredientsList({ ingredients }) {
      return (
        <ScrollView style={styles.ingr}>
          {ingredients.map((item, index) => (
            <Text key={index.toString()}>{item}</Text>
          ))}
        </ScrollView>
      );
    }
    
    // koda daļa kas savāc visus ingredients un to daudzumu kas nepieciešams priekš dzēriena
    const ingredients = [];
    for(let i = 0;i < 15; i++){
      const ingredient = fullInfo[`strIngredient${i}`];  
      const measure = convertOuncesToMl(fullInfo[`strMeasure${i}`]);  

      if(ingredient && measure) {
        ingredients.push(ingredient + " - " + measure + " ml")
      }
    }

    function convertOuncesToMl(ounces) {
      const numOunces = parseFloat(ounces);
    
      if (isNaN(numOunces)) {
        return null; 
      }
      const ml = numOunces * 29.5735;
    
      return Math.round(ml * 100) / 100;
    }


    let imageUrl = fullInfo.strDrinkThumb;

    return (

      <View>
          <MainHeader title="Recipe"/>
          
          <ScrollView style={styles.container} >
        
        <View>

          <Text style={styles.drinkName}>{fullInfo.strDrink}</Text>
            <View>
              <Image
                source={{ uri: imageUrl }}
                style={styles.image}
              />
            </View>

          <Text style={styles.ingrText}>INGREDIENTS</Text>
          <IngredientsList ingredients={ingredients} />

          <Text style={styles.howTo} >HOW TO MAKE IT</Text>
          <Text style={styles.instruction}>{fullInfo.strInstructions}</Text>
          
        </View>
       
      </ScrollView>
      <View style={styles.buttonContainer}>
            <HeartButton onPress={()=>{
              let id = fullInfo.idDrink
              addToDatabase(id)
            }}/>
          </View>
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

      image: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 250,
        height: 250,
        borderRadius: 20
      },
      ingr: {
        fontSize:20,
        textAlign: "center",
        alignSelf: 'center',
      },
      ingrText:{
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:20
      },

      howTo:{
        marginTop: 5,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:20
      },
      
      drinkName: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 5,
      },

      instruction: {
        textAlign: "center",
        fontSize: 15,
        padding: 5,

      },
      buttonContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40: 1,
        right: 10,
        zIndex: 999,
        padding: 10,
      }

    });


  export default RecipeScreen;