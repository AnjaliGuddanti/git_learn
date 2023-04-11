import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {View,Text,Button} from 'react-native'
import { getItems } from '../Redux/Items/actions';


function ListingScreen({navigation}) {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getItems());
  },[])
 const items=useSelector(state=>state.items.items);
 console.log(items)
  return (
    <View>
        <Text>ListingScreen</Text>
        <Button title='go' onPress={()=>{navigation.navigate("EntryScreen")}}/>
       
    </View>

  );
}
export default ListingScreen;