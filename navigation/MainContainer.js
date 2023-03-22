import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import SearchScreen from '../screens/SearchScreen'

const homeName = 'Home'
const categoryName = "Category"
const favoritesName = "Favorites"
const searchName = "Search"

const Tab = createBottomTabNavigator(); 

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = {homeName}
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) => {
                        let iconName; 
                        let routerName = route.name;

                        if(routerName === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }else if(routerName === categoryName){
                            iconName = focused ? 'menu' : 'menu-outline'
                        }else if(routerName === favoritesName){
                            iconName = focused ? 'heart' : 'heart-outline'
                        }else if(routerName === searchName){
                            iconName = focused ? 'search' : 'search-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={categoryName} component={CategoryScreen}/>
            <Tab.Screen name={favoritesName} component={FavoritesScreen}/>
            <Tab.Screen name={searchName} component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
       
}