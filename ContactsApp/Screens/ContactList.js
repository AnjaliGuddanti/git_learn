import React from 'react';
import { Button, Text, View } from 'react-native';


function ContactList({navigation}) {
 
  return (
    <View>
      <Button title='Add' onPress={()=>navigation.navigate("AddEditContact")}/>
    </View>
  );
}



export default ContactList;
