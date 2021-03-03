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
         
          width: Width* 0.9,
          height: Height * 0.28,
          backgroundColor: 'white',
          

      },
      rowcontainer:{
           padding: 10,
           flexDirection:'row',
           justifyContent:'space-between'
      }
    
});

export default styles;