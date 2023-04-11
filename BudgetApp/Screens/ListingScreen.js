import React from 'react';
import {View,Text,Button} from 'react-native'
function ListingScreen({navigation}) {
  
  return (
    <View>
        <Text>ListingScreen</Text>
        <Button title='go' onPress={()=>{navigation.navigate("EntryScreen")}}/>
    </View>
  );
}



export default ListingScreen;