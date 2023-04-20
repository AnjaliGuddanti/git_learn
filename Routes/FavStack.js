import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddEditContact from '../Screens/AddEditContact';
import FavoriteList from '../Screens/FavoriteList';
const Stack = createStackNavigator();

function FavStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName='FavoriteList' screenOptions={{
      headerShown: false,}}>
        <Stack.Screen name="FavoriteList" component={FavoriteList}/>
        <Stack.Screen name="AddEditContact" component={AddEditContact} />
    </Stack.Navigator>
  );
}
export default FavStack;
