import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import CategoryScreen from '../screens/CategoryScreen'

const Stack = createSharedElementStackNavigator();

const CategoryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryNavigator;