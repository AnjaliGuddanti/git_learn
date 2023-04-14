

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './Routes/HomeStack';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerNavigator from './Routes/DrawerNavigator';

function App(): JSX.Element {
 
  return (
    <NavigationContainer>
    
        <DrawerNavigator/>
   
      
    </NavigationContainer>
  );
}



export default App;
