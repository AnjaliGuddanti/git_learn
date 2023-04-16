import React,{useEffect,useState} from 'react';
import { Button, Text, View ,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import { SafeAreaView ,SwipeList,SwipeListView} from 'react-native-swipe-list-view';
let db = openDatabase({name: 'ContactsDB.db'});

function ContactList({navigation}) {
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    getData();
  });
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_contact', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setUserList(temp);
      });
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
            alert('Please insert a valid Contact Id');
          }
        },
      );
    });
  };
 
  return (
    <View style={styles.container}>
     
      <SwipeListView
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
              <View style={styles.rowBack}>
              <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddEditContact', {
                      data: {
                        name: item.name,
                        mobileNo: item.mobileNo,
                        landlineNo: item.landlineNo,
                        photo:item.photo,
                        id: item.contact_id,
                      },
                    });
                  }}>
                    <Text>Edit</Text>
              </TouchableOpacity>
              </View>
                <View style={styles.belowView}>
                  <TouchableOpacity
                    onPress={() => {
                    deleteUser(item.contact_id);
                  }}>
                    <Text>delete</Text>
                  </TouchableOpacity>
                </View>
               
            </TouchableOpacity>
          );
        }}   
          
        renderHiddenItem={ (data, rowMap) => (
          <View>
                  <Text>Left {data.index}</Text>
                  <Text>Right</Text>
          </View>
          
      )}
       leftOpenValue={75}
      rightOpenValue={-75}
      />
      
              
       
            <TouchableOpacity
              style={styles.addNewBtn}
              onPress={() => {
                navigation.navigate('AddEditContact',{ data: {
                },});
              }}>
             <Text style={styles.btnText}>Add New User</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addNewBtn: {
    backgroundColor: 'purple',
    width: 150,
    height: 50,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  userItem: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
  },
  itemText: {
    flex:1,
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
   
    alignSelf:'center',
    marginLeft:16
  },
  belowView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    height: 50,
  },
  icons: {
    width: 24,
    height: 24,
  },
});

export default ContactList;
