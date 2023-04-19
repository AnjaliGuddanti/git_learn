import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddEditContact from '../Screens/AddEditContact';

import ContactList from '../Screens/ContactList';
const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName='ContactList' screenOptions={{
      headerShown: false,}}>
        <Stack.Screen name="ContactList" component={ContactList}/>
        <Stack.Screen name="AddEditContact" component={AddEditContact} />
    </Stack.Navigator>
  );
}
export default HomeStack;
