import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavList from '../Screens/FavList';
const Stack = createStackNavigator();

function FavStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FavList" component={FavList} options={{title:"Fav List"}}/>
    </Stack.Navigator>
  );
}
export default FavStack;
