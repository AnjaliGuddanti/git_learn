import React,{useState,useEffect} from 'react';
import { Text, View ,StyleSheet,TextInput,TouchableOpacity,Alert,Image,Button} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import {ImagePicker} from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';


import ImagePickerCrop from 'react-native-image-crop-picker';
//  const blankProfile =require('../Assets/blankProfile.png');
import { IconButton, MD3Colors } from 'react-native-paper';
let db = openDatabase({name: 'ContactsDB.db'});
function AddEditContact({navigation,route}) {
  const {data}=route.params;
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [favorite ,setFavorite ]=useState("false")
    const [photo, setPhoto] = useState(null);
    const [landlineNo, setLandlineNo] = useState('');
  const saveUser = () => {
   
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_contact (name, mobileNo, landlineNo,photo,favorite ) VALUES (?,?,?,?,?)',
        [name, mobileNo, landlineNo,photo,favorite ],
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
      tx.executeSql(
        'UPDATE table_contact set name=?, mobileNo=? , photo=?,landlineNo=? favorite=?  where contact_id=?',
        [name, mobileNo, photo,landlineNo,favorite , route.params.data.id],
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
      setFavorite(data.favorite)
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
              'CREATE TABLE IF NOT EXISTS table_contact(contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), mobileNo VARCHAR(20), photo VARCHAR(100),landlineNo VARCHAR(20),favorite VARCHAR(5))',
              [],
            );
            console.log("created tb")
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  }, []);
 
  const openPicker = () => {
    
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        mediaType:'images',
        path: 'images',
      },
      includeBase64:true,
    }

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // setPhoto(source);
       
        const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };

        setPhoto(source);
      }
    });
  };
  const goToPickImage=()=>{
    ImagePickerCrop.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setPhoto(image.path)
    });
    
  }
  return (
    <View style={styles.container}>
      
       <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       


      <View>
      {photo ? (
        <Image source={{ uri: photo }} style={{ width: 150, height: 150,borderRadius:75 ,marginTop:100}} />
      ) : (
        <Image source={require('../Assets/blankProfile.png')} style={{ width: 150, height: 150,borderRadius:75 ,marginTop:100}} />
      )}

       <Button title="GetImage" onPress={()=>goToPickImage()} />
      </View>
      
    </View>


      {/* <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Pick image" onPress={openPicker} />
    </View>
    {photo && (
        <Image source={photo} style={{ width: 50, height: 50 }} />
      )} */}
      
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
        placeholder="Enter Favorite "
        value={favorite }
        onChangeText={txt => setFavorite(txt)}
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
