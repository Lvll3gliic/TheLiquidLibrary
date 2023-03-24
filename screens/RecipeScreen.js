  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View , Image,FlatList,ScrollView} from 'react-native';
  import { getCategoryList, getFullInfoById }  from '../api/api';
  import React, { useState, useEffect } from 'react';
  import MainHeader from '../components/MainHeader';



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
        <View>
          <FlatList 
            style={styles.ingr}
            data={ingredients}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }

    // koda daļa kas savāc visus ingredients un to daudzumu kas nepieciešams priekš dzēriena
    const ingredients = [];
    for(let i = 0;i < 15; i++){
      const ingredient = fullInfo[`strIngredient${i}`];  
      const measure = fullInfo[`strMeasure${i}`];  

      if(ingredient && measure) {
        ingredients.push(ingredient + " - " + measure)
      }
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
        textAlign: "center",
        alignSelf: 'center',
      },
      ingrText:{
        padding: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:20
      },

      howTo:{
        marginTop: 15,
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
    });


  export default RecipeScreen;