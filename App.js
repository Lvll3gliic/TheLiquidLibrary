
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './navigation/MainNavigator';

const Stack = createNativeStackNavigator();
// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)

export default function App(){
  return (
   
    <MainNavigator/>
  );
}