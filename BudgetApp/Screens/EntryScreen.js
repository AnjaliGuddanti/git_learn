
import React,{useState} from 'react';
import { StyleSheet, Text,TextInput,View,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Items/actions';
import { Stack, Button } from "@react-native-material/core";
function EntryScreen({navigation}) {
  const [Budget,setBudget]=useState({Name:'',PlannedAmount:'',ActualAmount:''})
  const dispatch=useDispatch();
  // const handleInputChange = (fieldName, value) => {
  //   setBudget(prevState => ({
  //     ...prevState,
  //     [fieldName]: value
  //   }));
  // };
  const handleSubmit=()=>{
       console.log(Budget)
      dispatch(addItem(Budget));
      setBudget({})
  }
  return (
    <View>
      <View style={styles.group}>
        <TextInput placeholder='Name' style={styles.input} onChangeText={(Val)=>setBudget({...Budget,Name:Val})}/>
        <TextInput placeholder='Planned amount' style={styles.input} onChangeText={(Val)=>setBudget({...Budget,PlannedAmount:Val})}/>
        <TextInput placeholder='Actual amount' style={styles.input} onChangeText={(Val)=>setBudget({...Budget,ActualAmount:Val})}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={{marginHorizontal:19}}>
            <Button variant="contained" title='Save' color="rgb(38, 38, 38)" tintColor="white" onPress={()=>{handleSubmit()}}/>
        </View>
        <View>
            <Button variant="contained" title='Show items' color="rgb(38, 38, 38)" tintColor="white" onPress={()=>navigation.navigate("ListingScreen")}/>
        </View>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  group:{
    marginHorizontal:30,
    marginTop:50,
  },
  input:{
    borderColor:'rgb(38, 38, 38)',
    borderWidth:1,
    marginBottom:25,
    borderRadius:12
  },
  
})


export default EntryScreen;