import { StyleSheet, Text, View ,Button,TextInput,Image} from 'react-native';
import { useState } from 'react';
export default function AddContact({ navigation }) {
 const [contact,setContact]=useState({name:'',mobileNo:'',landLineNo:'',photo:""})
 const handleSubmit=()=>{
  if(contact.name!='' && contact.landLineNo!=='',contact.mobileNo!=='',contact.photo!==''){
    console.log(contact)
    navigation.navigate('ContactList')
  }
 }
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder='name'
         onChangeText={(value)=>{setContact({...contact,name:value})}} 
         value={contact.name}/>   
        <Text style={styles.label}>mobileNo</Text>
        <TextInput style={styles.input} placeholder='mobileNo' keyboardType='numeric' onChangeText={(value)=>{setContact({...contact,mobileNo:value})}} value={contact.mobileNo}/> 
        <Text style={styles.label}>landLineNo</Text>
        <TextInput style={styles.input} placeholder='landLineNo'keyboardType='numeric'onChangeText={(value)=>{setContact({...contact,landLineNo:value})}} value={contact.landLineNo}/> 
        <Text style={styles.label}>Photo</Text>
        <TextInput style={styles.input} placeholder='photo' onChangeText={(value)=>{setContact({...contact,photo:value})}} value={contact.photo}/> 
        <Button title='submit' onPress={handleSubmit}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:48,
    },
    input:{
      borderWidth: 1,
      borderColor:'black',
      height: 40,
      
      padding: 10,
      margin:5,
    
    },
    label:{
      margin:5,
      fontSize:18,
    }
  });