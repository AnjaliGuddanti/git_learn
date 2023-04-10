import React from 'react';
import {View,Text,Button} from 'react-native'

function ContactList({navigation}:any) {
  return (
    <View>
        <Text>
            ContactList
        </Text>
        <Button title='add' onPress={()=>navigation.navigate("AddContact")}/>
    </View>
  );
}
export default ContactList;