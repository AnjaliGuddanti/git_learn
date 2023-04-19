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
        // alignItems:'flex-end',
       height:65,
       width:100
    },
    actionText:{
        textAlign:'center',
        color:'white',
        fontWeight:'400',
        fontSize:16
        
    }
})
  
export default RightAction;