import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}