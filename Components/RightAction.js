import React,{useEffect} from "react"
import { TouchableOpacity,View,Animated,Text,StyleSheet } from "react-native";
const RightAction=({progress,dragX,onPress})=>{
    const scale = dragX.interpolate({
        inputRange: [-100,0],
        outputRange: [1,0],
        extrapolate:'clamp'
      });
      
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={ styles.rightAction}>
          <Animated.Text style={[
           styles.actionText,
            {
              transform: [{  scale }],
            },
          ]}>
            Edit/Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    rightAction:{
      backgroundColor:'green',
      justifyContent:'center',
      height:60,
      width:68
    },
    actionText:{
      textAlign:'center',
      color:'white',
      fontWeight:'400',
      fontSize:20
    }
})
  
export default RightAction;