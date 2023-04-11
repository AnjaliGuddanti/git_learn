
import 'react-native-gesture-handler';

import React from 'react';
import HomeStack from './Routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
function App(): JSX.Element {
  
  return (
    <NavigationContainer>
    <HomeStack/>
  </NavigationContainer>
  );
}



export default App;
