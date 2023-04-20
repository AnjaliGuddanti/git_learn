import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {View,StyleSheet,ScrollView} from 'react-native'
import {itemReducer} from '../Redux/Items/itemReducer';
import { FlatList } from 'react-native-gesture-handler';
import { Text ,Stack,Button} from "@react-native-material/core";

function ListingScreen({navigation}) {
 let items=[];
 items=useSelector(state=>state.itemReducer);
 console.log(items)
  return (
      <Stack style={styles.container}>
        <Stack style={{height:'90%'}}> 
          <Stack style={styles.row}>
            <Text variant="h6"  style={styles.cell}>Item Name</Text>
            <Text variant="h6" style={styles.cell}>Planned Amount</Text>
            <Text variant="h6" style={styles.cell}>Actual Amount</Text>
          </Stack>
          <FlatList 
          data={items}
          renderItem={({item,index})=>(
            <Stack style={styles.row}>
              <Text style={styles.cell}>{item.itemName}</Text>
              <Text style={styles.cell}>{item.plannedAmount}</Text>
              <Text style={styles.cell}>{item.actualAmount}</Text>
            </Stack>
          )}
          keyExtractor={(item, index) => index} 
          />
      </Stack>
      <Stack style={{height:'10%' ,justifyContent:'flex-end'}}>
        <Button variant="contained" color="rgb(38, 38, 38)" tintColor="white" title='Add' onPress={()=>{navigation.navigate("EntryScreen")}}/>
      </Stack> 
    </Stack>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
    height:'100%'
  },
  header:{
    fontSize:'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
 
})
export default ListingScreen;