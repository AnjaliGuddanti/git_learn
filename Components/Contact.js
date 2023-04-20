import React from "react";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import RightAction from './RightAction';
import { View,Text,StyleSheet,Image } from "react-native";
const Contact=({item,navigation})=>{
    return(
          <Swipeable renderRightActions={(progress,dragX)=><RightAction progress={progress} dragX={dragX} 
            onPress={
              ()=>{ navigation.navigate('AddEditContact', {
              data: {
                name: item.name,
                mobileNo:item.mobileNo,
                landlineNo:item.landlineNo,
                photo:item.photo,
                favorite:item.favorite,
                id: item.contact_id,
              },
            } )} }/> }>
    
            <View style={styles.userItem}>
              <View style={{flexDirection:'row'}}>
                {item.photo ? (
                      <Image source={{ uri: item.photo }} style={{ width: 58, height: 58,borderRadius:29 ,marginLeft:5}} />
                    ) : (
                      <Image source={require('../Assets/blankProfile.png')} style={{ width: 58, height: 58,borderRadius:29,marginLeft:5 }} />
                    )}
                <Text style={styles.itemText}>{ item.name}</Text>
              </View>
            </View>
        </Swipeable>
    )
};

const styles = StyleSheet.create({
  userItem: {
    padding: 8,
    height:70,
  },
  itemText: {
    flex:1,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    alignSelf:'center',
    marginLeft:16,
  },
});


export default Contact;