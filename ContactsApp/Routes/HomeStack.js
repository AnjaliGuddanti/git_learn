//https://youtu.be/51ctxSpuHVg
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddEditContact from '../Screens/AddEditContact';
import { TouchableOpacity ,Text} from 'react-native';
import ContactList from '../Screens/ContactList';
const Stack = createStackNavigator();

function HomeStack({navigation}) {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={{ color: '#fff', marginLeft: 10 }}>Menu</Text>
        </TouchableOpacity>
      ),
    }}>
        <Stack.Screen name="ContactList" component={ContactList} options={{title:"Contact List"}}/>
        <Stack.Screen name="AddEditContact" component={AddEditContact} />
    </Stack.Navigator>
  );
}
export default HomeStack;
