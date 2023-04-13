import React,{useState,useEffect} from 'react';
import { Text, View ,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'ContactsDatabase.db'});
function AddEditContact({navigation,route}) {
  const {data}=route.params;
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [photo, setPhoto] = useState('');
    const [landlineNo, setLandlineNo] = useState('');
  const saveUser = () => {
   
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_contact (name, mobileNo, landlineNo,photo) VALUES (?,?,?,?)',
        [name, mobileNo, landlineNo,photo],
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
          } else alert('Registration Failed');
        },
        error => {
          console.log(error);
        },
      );
    });
  };
  const updateUser = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_contact set name=?, mobileNo=? , photo=?,landlineNo=? where contact_id=?',
        [name, mobileNo, photo,landlineNo, route.params.data.id],
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
  useEffect(() => {
    console.log(data)
    if(data!=null){
      setName(data.name)
      setLandlineNo(data.landlineNo)
      setPhoto(data.photo)
      setMobileNo(data.mobileNo)
    }
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_contact'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_contact', []);
            console.log("droped and creating")
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_contact(contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), mobileNo VARCHAR(20), photo VARCHAR(100),landlineNo VARCHAR(20))',
              [],
            );
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter User Name"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter mobileNo"
        value={mobileNo}
        onChangeText={txt => setMobileNo(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      <TextInput
        placeholder="Enter landline"
        value={landlineNo}
        onChangeText={txt => setLandlineNo(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      <TextInput
        placeholder="Enter photo"
        value={photo}
        onChangeText={txt => setPhoto(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          saveUser();
        }}>
        <Text style={styles.btnText}>Save User </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          updateUser();
        }}>
        <Text style={styles.btnText}>Update User </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.8,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 100,
  },
  addBtn: {
    backgroundColor: 'purple',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddEditContact;
