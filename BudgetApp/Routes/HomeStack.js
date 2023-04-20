import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../Screens/ListingScreen';
import EntryScreen from '../Screens/EntryScreen';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator 
    screenOptions={{headerStyle:{
      backgroundColor:'rgb(38, 38, 38)',
    },
    headerTintColor:'white',
    headerTitleAlign:'center',
    headerTitleStyle:{
      fontSize:20,
      fontWeight:'100',
    }
    }}>
        <Stack.Screen name="ListingScreen" component={ListingScreen} options={{title:'Budget Entry Listing'}} />
        <Stack.Screen name="EntryScreen" component={EntryScreen} options={{title:'Budget Entry'}}/>
    </Stack.Navigator>
  );
}
export default HomeStack;