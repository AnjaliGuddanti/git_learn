import React,{useEffect,useState} from 'react';
import {  View ,StyleSheet,Image,TextInput, FlatList,} from 'react-native';
import Header from '../Components/Header';
import Contact from '../Components/Contact';
import Icons from 'react-native-vector-icons/Ionicons';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'ContactsDatabase.db'});
function ContactList({navigation}) {
  const [searchName,setSearchName]=useState("");
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData()
  });
  const getData = () => {
    var temp = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_contact ORDER BY LOWER(name) ASC', [], (tx, results) => {
        for (let i = 0; i < results.rows.length; ++i)
        {
            temp.push(results.rows.item(i));
        }
        setUserList(temp)
      });
    });
  };
  const filterData = (data) => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
   );
  }
  return (
    <View style={styles.container}>
      <Header title="Contact List" isHome="true" navigation={navigation}/>
      <View style={styles.searchWrapperStyle}>
        <Icons size={24} name="search" color="black" style={styles.iconStyle} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={styles.searchInputStyle}
          value={searchName}
          onChangeText={(newText) => {
          setSearchName(newText);
        }}
        />
        {searchName=='' ? null:
          <Icons
          size={24}
          name="close"
          color="black"
          style={styles.iconStyle}
          onPress={() => {
            setSearchName("");
          }}
        />
        }  
      </View>
      <View style={styles.listItems}>
      <FlatList
        data={filterData(userList)}
        renderItem={({item, index}) => {
        return(
        <Contact item={item} navigation={navigation}/>
      )}}/>
      </View>
      <View style={styles.addButton}>
        <Icons name='add-circle' size={55} color='gray' onPress={()=>{
          navigation.navigate('AddEditContact',{ data: {}})
        }}/>
      </View>
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
    fontSize: 18,
    margin: 0,
  },
  listItems:{
   height:'68%'
  },
 
});


export default ContactList;
