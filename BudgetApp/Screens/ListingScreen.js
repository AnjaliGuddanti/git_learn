import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import { getItems } from '../Redux/Items/actions';
import { Button } from "@react-native-material/core";
import { FlatList } from 'react-native-gesture-handler';

// import { Stack, TextInput } from "@react-native-material/core";
function ListingScreen({navigation}) {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getItems());
  },[])
 const items=useSelector(state=>state.items.items);
 console.log(items)
  return (
    <View style={styles.container}>
      <View style={styles.table}>
          {/* <Stack spacing={2} style={{ margin: 16 }}>
              <TextInput label="Label" variant="standard" />
            </Stack> */}
        {/* <FlatList
          data={items}
          renderItem={({item})=> {<Text>{item.Name}</Text>}}
          keyExtractor={item=>item.Name}
        /> */}
        {/* {items.map((item)=>{
          <View key={item.Name}>
            <Text>{item.Name}</Text>
          </View>
          
        })} */}
         <FlatList 
      keyExtractor={(item)=>item.Name} 
      data={items}
      renderItem={({item})=>(
        <View style={styles.items}>
          <Text>{item.Name}</Text>
          <Text>{item.PlannedAmount}</Text>
          <Text>{item.ActualAmount}</Text>
        </View>
      )}
      /> 
      </View>
      <View style={styles.AddButton}>
          <Button title='Add' onPress={()=>{navigation.navigate("EntryScreen")}}/>
      </View>
    </View>

  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  table:{
    flex:9,
  },
  AddButton:{
   flex:1,
   
  }
})
export default ListingScreen;