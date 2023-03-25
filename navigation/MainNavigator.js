import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import RecipeScreen from '../screens/RecipeScreen';
import DrinksByCategoryScreen from '../screens/DrinksByCategoryScreen'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createSharedElementStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"  />
      <Stack.Navigator
       initialRouteName="Login"
      >
        <Stack.Screen
        name="Login"
        component={LoginScreen}/>
        <Stack.Screen
        name="Register"
        component={RegisterScreen}/>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="RecipeScreen"
          component={RecipeScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
        <Stack.Screen
          name="DrinksByCategoryScreen"
          component={DrinksByCategoryScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;