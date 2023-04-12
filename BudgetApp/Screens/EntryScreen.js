
import React,{useState} from 'react';
import { StyleSheet, Text,TextInput,View,Button,Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Items/actions';
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
            <Button title='Save' onPress={()=>{handleSubmit()}}/>
        </View>
        <View>
            <Button title='Show items' onPress={()=>navigation.navigate("ListingScreen")}/>
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
    borderColor:'black',
    borderWidth:0.7,
    marginBottom:25,
    borderRadius:8
  },
  
})


export default EntryScreen;