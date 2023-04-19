import React ,{useState,useEffect}from 'react';
import { View,Text,FlatList,TouchableOpacity,StyleSheet,Image } from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import Header from './Header';
let db = openDatabase({name: 'ContactsDatabase.db'});
function FavoriteList({navigation}) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData()
  });
  
  const getData = () => {
    var temp = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_contact WHERE favorite==1 ORDER BY LOWER(name) ASC', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i)
        {
            temp.push(results.rows.item(i));
        }
        setUserList(temp)
      });
    });
};
  return (
    <View>
     <Header title="Favorite Contact List" isHome="true" navigation={navigation}/>
        <FlatList
         data={userList}
         renderItem={({item, index}) => {
           return (
             <TouchableOpacity style={styles.userItem}>
               <View style={{flexDirection:'row'}}>
                 {item.photo ? (
                       <Image source={{ uri: item.photo }} style={{ width: 58, height: 58,borderRadius:29 ,marginLeft:5}} />
                     ) : (
                       <Image source={require('../Assets/blankProfile.png')} style={{ width: 58, height: 58,borderRadius:29,marginLeft:5 }} />
                     )}
                 <Text style={styles.itemText}>{item.contact_id}.{ item.name}</Text>
               </View>
             </TouchableOpacity>
           );
         }}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton:{
    height: 62,
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    marginRight:10,
  },
  searchWrapperStyle: {
    height: 56,
    borderWidth:0.7,
    borderRadius:10,
    marginHorizontal:28,
    marginVertical:20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconStyle: {
    alignSelf:'center',
    marginHorizontal: 8,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 16,
    margin: 0,
  },
  listItems:{
   height:'73%'
  },
  userItem: {
    width: '100%',
    padding: 8,
  },
  itemText: {
    flex:1,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    alignSelf:'center',
    marginLeft:16
  },
  
});
export default FavoriteList;
