import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RecipeScreen from './screens/RecipeScreen';
import FavoritesScreen from './screens/FavoritesScreen'; 
import DrinksByCategoryScreen from './screens/DrinksByCategoryScreen';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './navigation/MainContainer';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //     name = "Home"
    //     component={HomeScreen}
    //     />
    //     <Stack.Screen
    //     name = "SearchScreen"
    //     component={SearchScreen}
    //     />
    //     <Stack.Screen
    //     name= "RecipeScreen"
    //     component={RecipeScreen}
    //     />
    //     <Stack.Screen
    //     name = "FavoritesScreen"
    //     component={FavoritesScreen}
    //     />
    //     <Stack.Screen 
    //     name = "DrinksByCategoryScreen"
    //     component={DrinksByCategoryScreen}
    //    />
    //    <Stack.Screen
    //    name = "CategoryScreen"
    //    component={CategoryScreen}
    //    />
    //   </Stack.Navigator>
    
    // </NavigationContainer>
    <MainContainer/>
  );
}