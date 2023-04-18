import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';
import DrawerNavigator from './Routes/DrawerNavigation';


function App(): JSX.Element {
 
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}



export default App;
