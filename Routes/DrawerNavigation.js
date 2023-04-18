import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../Routes/HomeStack'
import FavoriteList from '../Screens/FavoriteList';
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator  screenOptions={{
      headerShown: false,}} >
        <Drawer.Screen name="HomeStack" component={HomeStack}/>
        <Drawer.Screen name="FavoriteList" component={FavoriteList}  />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;

