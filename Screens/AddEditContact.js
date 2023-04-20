import React,{useState,useEffect} from 'react';
import { Text, View ,StyleSheet,TextInput,TouchableOpacity,Alert ,Image,ScrollView} from 'react-native';
import ImagePickerCrop from 'react-native-image-crop-picker';
import {openDatabase} from 'react-native-sqlite-storage';
import Header from '../Components/Header';
let db = openDatabase({name: 'ContactsDatabase.db'});
function AddEditContact({navigation,route}) {
  const {data}=route.params;
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [photo, setPhoto] = useState('');
  const [landlineNo, setLandlineNo] = useState('');
  const [favorite,setFavorite]=useState(false)
  const [Id,setId]=useState();
  const [title,setTitle] =useState("Add New Contact")
  useEffect(() => {
    if(data.name){
      setName(data.name)
      setLandlineNo(data.landlineNo)
      setPhoto(data.photo)
      setMobileNo(data.mobileNo)
      setFavorite(data.favorite)
      setTitle("Update Contact")
      setId(data.id);
    }
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_contact'",
        [],
        (tx, res) => {
          console.log("Create database working")
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_contact', []);
            console.log("droped and creating")
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_contact(contact_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), mobileNo VARCHAR(20), photo VARCHAR(200),landlineNo VARCHAR(10),favorite INTEGER )',
              [],
            );
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  },
[]);
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
  const saveContact = () => {
    console.log(name,mobileNo,landlineNo)
    if( name && mobileNo  && landlineNo)
    {
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
      }
    else{
      Alert.alert('Error','Please Provide Contact Information...')
    }
  };

  const updateContact = () => {
    if( name && mobileNo  && landlineNo)
    {
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
                  onPress: () => navigation.goBack(),
                },
              ],
              {cancelable: false},
            );
          } else Alert.alert('Updation Failed');
        },
      );
    });
  }
  else{
    Alert.alert('Error','Please Provide Contact Information...')
  }
};
 
  let deleteContact = id => {
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
                      navigation.goBack();
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
    <ScrollView>
      <Header title={title} navigation={navigation} 
       favorite={favorite} onPress={(fav)=>{setFavorite(fav)}}/>

      <View style={{flex: 1,  alignItems: 'center', }}>
      {photo ? (
            <Image source={{ uri: photo }} style={{ width: 100, height: 100,borderRadius:50 ,marginTop:40}} />
          ):(
            <Image source={require('../Assets/blankProfile.png')} style={{ width: 100, height: 100,borderRadius:50 ,marginTop:40}} />
      )}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          goToPickImage()
        }}>
        <Text style={styles.btnText}>Get Image </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Enter User Name"
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Enter MobileNo"
        value={mobileNo}
        keyboardType='number-pad'
        onChangeText={txt => setMobileNo(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      <TextInput
        placeholder="Enter landline"
        value={landlineNo}
        keyboardType='number-pad'
        onChangeText={txt => setLandlineNo(txt)}
        style={[styles.input, {marginTop: 20}]}
      />
      
      {data.name ? 
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => {
            updateContact();
          }}>
            <Text style={styles.btnText}>Update Contact </Text>
          </TouchableOpacity>
          <View style={styles.addBtn}>
            <TouchableOpacity
              onPress={() => {
                deleteContact(Id);}}>
            <Text style={styles.btnText}>delete</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            saveContact();
          }}>
          <Text style={styles.btnText}>Save Contact </Text>
        </TouchableOpacity>
        }
      </View>
    </ScrollView>
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
    marginTop: 30,
    fontSize: 17,
  },
  addBtn: {
    backgroundColor: 'gray',
    height: 45,
    padding:10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    marginLeft:10
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddEditContact;
