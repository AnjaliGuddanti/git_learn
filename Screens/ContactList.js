import React,{useEffect,useState} from 'react';
import { Text, View ,StyleSheet,TouchableOpacity,Image,TextInput,Alert, FlatList} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';
import Header from './Header'
import Icons from 'react-native-vector-icons/Ionicons';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'ContactsDatabase.db'});
function ContactList({navigation}) {
  let list =[]
  const [searchName,setSearchName]=useState("");
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getData()
  });
  const getData = () => {
    var temp = [];
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_contact ORDER BY name ASC', [], (tx, results) => {
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
    );}
    const saveUser = () => {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO table_contact (name, mobileNo, landlineNo,photo,favorite) VALUES (?,?,?,?,?)',
          [name, mobileNo, landlineNo,photo,favorite],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'You are Registered Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('ContactList'),
                  },
                ],
                {cancelable: false},
              );
            } else Alert.alert('Registration Failed');
          },
          error => {
            console.log(error);
          },
        );
      });
    };
  
  const updateUser = () => {
      db.transaction(tx => {
        console.log(Id)
        tx.executeSql(
          'UPDATE table_contact set name=?, mobileNo=? , photo=?,landlineNo=?,favorite=? where contact_id=?',
          [name, mobileNo, photo,landlineNo,favorite, Id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User updated successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('ContactList'),
                  },
                ],
                {cancelable: false},
              );
            } else Alert.alert('Updation Failed');
          },
        );
      });
  };
  
  
  let deleteUser = id => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM  table_contact where contact_id=?',
          [id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User deleted successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => {
                      getData();
                    },
                  },
                ],
                {cancelable: false},
              );
            } else {
              Alert.alert('Please insert a valid Contact Id');
            }
          },
        );
      });
  };
  return (
    
    <View style={styles.container}>
      <Header title="ContactList" isHome="true" navigation={navigation}/>
      <View style={styles.searchWrapperStyle}>
        <Icons size={18} name="search" color="black" style={styles.iconStyle} />
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
          size={18}
          name="close"
          color="black"
          style={styles.iconStyle}
          onPress={() => {
            setSearchName("");
          }}
        />
        }  
      </View>
      <Swipeable>
      <View style={styles.listItems}>
      <FlatList
       data={filterData(userList)}
        renderItem={({item, index}) => {
          return (
            <View style={styles.userItem}>
              <View style={{flexDirection:'row'}}>
                {item.photo ? (
                      <Image source={{ uri: item.photo }} style={{ width: 58, height: 58,borderRadius:29 ,marginLeft:5}} />
                    ) : (
                      <Image source={require('../Assets/blankProfile.png')} style={{ width: 58, height: 58,borderRadius:29,marginLeft:5 }} />
                    )}
                <Text style={styles.itemText}>{item.contact_id}.{ item.name}</Text>
              </View>
            </View>
          );
        }}
        renderHiddenItem={ (rowData, rowMap) => (
          <View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddEditContact', {
                      data: {
                        name: rowData.item.name,
                        mobileNo: rowData.item.mobileNo,
                        landlineNo: rowData.item.landlineNo,
                        photo:rowData.item.photo,
                        favorite:rowData.item.favorite,
                        id: rowData.item.contact_id,
                      },
                    });
                  }}>
                  <Text>Edit</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.belowView}>
                  <TouchableOpacity
                    onPress={() => {
                    deleteUser( rowData.item.contact_id);
                  }}>
                    <Text>delete</Text>
                  </TouchableOpacity>
              </View>
          </View>
        )}
        rightOpenValue={-75}
      />
      </View>
      </Swipeable>
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
    fontSize: 16,
    margin: 0,
  },
  listItems:{
   height:'68%'
  },
  userItem: {
    width: '100%',
    padding: 8,
  },
  itemText: {
    flex:1,
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
    alignSelf:'center',
    marginLeft:16
  },
  
});

export default ContactList;
