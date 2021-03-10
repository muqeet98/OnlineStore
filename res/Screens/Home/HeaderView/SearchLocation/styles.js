import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

      },
      headerView:{
        flexDirection: 'row',
        backgroundColor: 'black',
        height: Height* 0.08,
        // justifyContent:'center',
        alignItems:'center',
    
      },
      inputView:{
        marginHorizontal:15,
        flexDirection:'column',
        width: Width* 0.7,
        // borderColor: 'red',
        // borderWidth: 1
         
      },
      
      textInputStyle1:{

         width: Width* 0.8,
         height: Height* 0.05,
         backgroundColor:'#000',
         color: '#fff',
         borderWidth:0.5,
         borderColor: "#fff",
         borderBottomWidth: 0.5,
         borderTopWidth: 0,
         borderLeftWidth: 0,
         borderRightWidth: 0,
      },
});

export default styles;