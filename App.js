import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RecipeScreen from './screens/RecipeScreen';
import FavoritesScreen from './screens/FavoritesScreen'; 
import DrinksByCategoryScreen from './screens/DrinksByCategoryScreen';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './navigation/MainNavigator';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
   
    <MainNavigator/>
  );
}