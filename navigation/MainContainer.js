import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import CategoryScreen from './screens/CategoryScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import SearchScreen from './screens/SearchScreen'

const homeName = 'Home'
const categoryName = "Category"
const favoritesName = "Favorites"
const searchName = "Search"

const Tab = createBottomTabNavigator(); 

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                initialRouteName = {homeName}
                screenCategory = {({route}) => ({
                    tabBarIcon:({focused, color, size}) => {
                        let iconName; 
                        let routerName = routeName
                        if(routerName === homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        }
                    }
                }
                )
                
            </Tab.Navigator>
        </NavigationContainer>

    );
       
}