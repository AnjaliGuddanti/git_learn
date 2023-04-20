
import React,{ useState} from 'react';
import { Alert} from 'react-native';
import {  Button ,Stack,TextInput} from "@react-native-material/core";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Items/actions';

function EntryScreen({navigation}) {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const dispatch=useDispatch();
  
  const handleSubmit=()=>{
    if(itemName && plannedAmount && actualAmount){
      dispatch(addItem({itemName, plannedAmount, actualAmount}));
      setItemName('');
      setPlannedAmount('')
      setActualAmount('');
      Alert.alert('Success','Data Saved Successfully');
    }
    else{
      Alert.alert('Warning','Please Provide data');
    }
  }
  return (
    <Stack spacing={8} style={{marginTop:35, justifyContent:'center'}}>
       <TextInput
        variant="outlined"
        label="Item Name"
        placeholder="Spots"
        style={{margin: 20}}
        value={itemName}
        onChange={event => setItemName(event.nativeEvent.text)}
      />
      <TextInput
        variant="outlined"
        label="Planned Amount"
        placeholder="100"
        keyboardType="numeric"
        style={{margin: 20}}
        value={plannedAmount}
        onChange={event => setPlannedAmount(event.nativeEvent.text)}
      />
      <TextInput
        variant="outlined"
        placeholder="100"
        keyboardType="numeric"
        label="Actual Amount"
        style={{margin: 20}}
        value={actualAmount}
        onChange={event => setActualAmount(event.nativeEvent.text)}
      />
      <Stack style={{ marginTop:18,flexDirection:'row',justifyContent:'center'}}>
        <Button style={{marginHorizontal:5}} variant="contained" title='Save' color="rgb(38, 38, 38)" tintColor="white" onPress={()=>{handleSubmit()}}/>
        <Button style={{marginHorizontal:5}} variant="contained" title='Show items' color="rgb(38, 38, 38)" tintColor="white" onPress={()=>navigation.navigate("ListingScreen")}/>
      </Stack>
    </Stack>
  );
}




export default EntryScreen;