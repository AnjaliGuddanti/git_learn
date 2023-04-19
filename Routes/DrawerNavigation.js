import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../Routes/HomeStack'
import FavoriteList from '../Screens/FavoriteList';
import Header from '../Screens/Header';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator  screenOptions={{
      headerShown: false,}}>
        <Drawer.Screen name="Contact list screen" component={HomeStack} />
        <Drawer.Screen name="Favorite contacts" component={FavoriteList} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

