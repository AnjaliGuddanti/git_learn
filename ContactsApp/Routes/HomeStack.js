import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddEditContact from '../Screens/AddEditContact';

import ContactList from '../Screens/ContactList';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="ContactList" component={ContactList} options={{title:"Contact List",headerShown: false }}/>
        <Stack.Screen name="AddEditContact" component={AddEditContact} />
    </Stack.Navigator>
  );
}
export default HomeStack;
