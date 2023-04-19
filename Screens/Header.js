import React from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
function Header({title,isHome,navigation}){
    return(
        <View style={{flexDirection:'row',height:50 ,backgroundColor:'gray'}}>
            {
                isHome? 
                <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPress={()=>{navigation.openDrawer()}}>
                    <Icons name="menu-sharp" size={30}/> 
                </TouchableOpacity> :
                <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPress={()=>{navigation.goBack()}}>
                    <Icons name="arrow-back" size={35}/> 
                </TouchableOpacity>
            }
            
            <View style={{flex:1.5,justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25}}>{title}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <Icons name="star" size={30}/>
            </View>
        </View>
    )
}
export default Header;