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
    <Drawer.Navigator initialRouteName="ContactList">
        <Drawer.Screen name="HomeStack" component={HomeStack}/>
        <Drawer.Screen name="FavStack" component={FavStack} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
