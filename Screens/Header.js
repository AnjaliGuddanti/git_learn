import React,{useEffect} from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
function Header({title,isHome,navigation,modify,onPress,favorite}){
    useEffect(()=>{
        console.log(favorite)
      },[])
    return(
        <View style={styles.container}>
            {
                isHome? 
                <TouchableOpacity style={{width:'25%'}} onPress={()=>{navigation.openDrawer()}}>
                    <Icons name="menu-sharp" size={30} style={{ marginLeft:18}}/> 
                </TouchableOpacity> :
                <TouchableOpacity style={{flex:1}} onPress={()=>{navigation.goBack()}}>
                    <Icons name="arrow-back" size={35} style={{marginLeft:18}}/> 
                </TouchableOpacity>
            }
            
            <View style={{width:'50%'}}>
                <Text style={{fontWeight:'bold',fontSize:25,alignSelf:'center'}}>{title}</Text>
            </View>
            {
                modify ?
               
                favorite? 
                <TouchableOpacity style={{width:'25%'}} onPress={onPress}>
                    <Icons name="star" size={30} style={{alignSelf:'center'}}/>
                </TouchableOpacity>:
                <TouchableOpacity style={{width:'25%'}} onPress={onPress}>
                    <Icons name="star-outline" size={30} style={{alignSelf:'center'}}/>
                </TouchableOpacity>
                :
                null
            }
              {/* if(favorite==='true'){
                return(
                    <TouchableOpacity style={{width:'25%'}} onPress={onPress}>
                        <Icons name="star-outline" size={30} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                );
                }
                else{
                    <TouchableOpacity style={{width:'25%'}} onPress={onPress}>
                        <Icons name="star-outline" size={30} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                }
          */}
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width:'100%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },}
)
export default Header;