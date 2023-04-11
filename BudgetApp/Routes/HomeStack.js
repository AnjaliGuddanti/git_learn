import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../Screens/ListingScreen';
import EntryScreen from '../Screens/EntryScreen';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
        <Stack.Screen name="EntryScreen" component={EntryScreen}/>
    </Stack.Navigator>
  );
}
export default HomeStack;