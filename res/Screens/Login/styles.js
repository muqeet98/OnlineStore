import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems:'center'
      },
      InnerView:{
          marginTop: 13,
        //   borderColor:'red',
        //   borderWidth: 2,
          width: Width* 0.9,
          height: Height * 0.28,
          backgroundColor: 'white',
          alignItems:'center'

      },
      inputView:{
  
          marginTop: 30,
          flexDirection:'row',
      },
      textInputcode:{
        marginLeft:7,
         backgroundColor:'#fff',
         width: Width* 0.1,
         height: Height* 0.05,
         borderTopColor: 0,
         borderLeftColor: 0,
         borderRightColor: 0,
         borderBottomColor: 'gray',
         borderWidth : 1,

      },

      textInputnumber:{
        marginLeft:9,
         backgroundColor:'#fff',
         width: Width* 0.3,
         height: Height* 0.05,
         borderTopColor: 0,
         borderLeftColor: 0,
         borderRightColor: 0,
         borderBottomColor: 'gray',
         borderWidth : 1,

      },

      buttonStyle:{
          marginTop: 30,
        justifyContent:'center',
        width: Width* 0.9,
        height: Height *0.08,
        backgroundColor: 'gray',
        alignItems:'center'
      }
    
    
});

export default styles;