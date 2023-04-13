import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';


function App(): JSX.Element {
 
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}



export default App;
