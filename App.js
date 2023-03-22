import HomeScreen from './navigation/screens/HomeScreen';
import SearchScreen from './navigation/screens/SearchScreen';
import RecipeScreen from './navigation/screens/RecipeScreen';
import FavoritesScreen from './navigation/screens/FavoritesScreen'; 
import DrinksByCategoryScreen from './navigation/screens/DrinksByCategoryScreen';
import CategoryScreen from './navigation/screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Home"
        component={HomeScreen}
        />
        <Stack.Screen
        name = "SearchScreen"
        component={SearchScreen}
        />
        <Stack.Screen
        name= "RecipeScreen"
        component={RecipeScreen}
        />
        <Stack.Screen
        name = "FavoritesScreen"
        component={FavoritesScreen}
        />
        <Stack.Screen 
        name = "DrinksByCategoryScreen"
        component={DrinksByCategoryScreen}
       />
       <Stack.Screen
       name = "CategoryScreen"
       component={CategoryScreen}
       />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}