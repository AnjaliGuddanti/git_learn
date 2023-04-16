import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavStack from './FavStack';
import HomeStack from './HomeStack';
import ContactList from '../Screens/ContactList';
import AddEditContact from '../Screens/AddEditContact';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavList from '../Screens/FavList';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{
      headerShown: false,}} />
        <Drawer.Screen name="FavList" component={FavList}  />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

