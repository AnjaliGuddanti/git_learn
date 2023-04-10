import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddContact from '../Screens/AddContact';

import ContactList from '../Screens/ContactList';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ContactList" component={ContactList}/>
        <Stack.Screen name="AddContact" component={AddContact} />
        
    </Stack.Navigator>
  );
}
export default HomeStack;