import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoritesScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {colors, sizes} from '../constants/theme';
import {StyleSheet, Animated} from 'react-native';
import HomeNavigator from './HomeNavigator'
import SearchNavigator from './SearchNavigator';
import CategoryNavigator from './CategoryNavigator'
import LoginScreen from '../screens/LoginScreen';

const tabs = [
  {
    name: 'home',
    screen: HomeNavigator,
  },
  {
    name: 'menu',
    screen: CategoryNavigator,
  },
  {
    name: 'heart',
    screen: FavoriteScreen,
  }, 
  {
    name: 'search',
    screen: SearchNavigator,
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                    let iconName; 
                    iconName = focused ? `${name}` : `${name}-outline`;
                  return (
                    <Ionicons
                      name={iconName}
                      size={25}
                    />
                  );
                },
              }}
           
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
       
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});

export default TabNavigator;