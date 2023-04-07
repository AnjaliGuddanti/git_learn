import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,FlatList,TouchableHighlight } from 'react-native';
import { useState } from 'react';
export default function ContactList({navigation}) {
    const [contacts,setContacts]=useState([{name:'Anjali',mobileNo:"234567",landLineNo:"234567",photo:"photo1"},
  {name:'Anjali1',mobileNo:"2345673456",landLineNo:"2345675657",photo:"photo2"}
]);
  return (
    <View>
        <View style={styles.list}>
       <FlatList 
      keyExtractor={(item)=>item.mobileNo} 
      data={contacts}
      renderItem={({item})=>(
        <TouchableHighlight activeOpacity={0.9}
        underlayColor="#d9d8df" onPress={()=>{navigation.navigate('UpdateContact',{item})}}>
        <View style={styles.items}>
          <Text style={styles.item}>{item.photo}</Text>
          <Text style={styles.item}>{item.name}</Text>
        </View>
        </TouchableHighlight>
      )}
      /> 
      </View>
        <Button title='AddContact' onPress={()=>navigation.navigate('AddContact')}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:5,
    },
    list:{
      backgroundColor:'white',
      borderRadius:10,
      marginHorizontal:2,
    },
    items:{
      flex:1,
      flexDirection:'row',
      padding:15,
      
    },
    item:{
      color:'black',
      paddingLeft:8,
    },
  });