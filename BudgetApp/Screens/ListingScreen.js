import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import { getItems } from '../Redux/Items/actions';
import { Button } from "@react-native-material/core";
import { FlatList } from 'react-native-gesture-handler';


function ListingScreen({navigation}) {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getItems());
  },[])
 const items=useSelector(state=>state.items.items);
 console.log(items)
  return (
    <View>

    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Name</Text>
        <Text style={styles.header}>PlannedAmount</Text>
        <Text style={styles.header}>ActualAmount</Text>
      </View>
      <View style={styles.row}>
      <FlatList 
      keyExtractor={(item)=>item.Name} 
      data={items}
      renderItem={({item})=>(
        <View style={styles.row}>
          <Text style={styles.cell}>{item.Name}</Text>
          <Text style={styles.cell}>{item.PlannedAmount}</Text>
          <Text style={styles.cell}>{item.ActualAmount}</Text>
        </View>
      )}
      /> 
      </View>
      
    </View>
      <View style={styles.AddButton}>
          <Button variant="contained" color="rgb(38, 38, 38)" tintColor="white" title='Add' onPress={()=>{navigation.navigate("EntryScreen")}}/>
      </View>
    </View>

  );
}

const styles=StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:6
  },
  header: {
    fontWeight: 'bold',
    fontSize:16,
    flex: 1,
    
  },
  cell: {
    flex: 1,
    fontSize:16,
    
  },
})
export default ListingScreen;