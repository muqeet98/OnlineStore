import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
        // flex: 1,
        // 
        // alignItems: "center",
        // textAlign: "center",
      },
      headerView:{
        flexDirection: 'row',
        backgroundColor: 'black'
      },
      inputView:{
        marginHorizontal:15,
        flexDirection:'column',
        width: Width* 0.7,
         
      },
      
      textInputStyle1:{
      
         width: Width* 0.66,
         height: Height* 0.05,
         backgroundColor:'#000',
         color: '#fff'
      },

      //row2
      ButtonStyle:{
         backgroundColor: "#fff",
         marginBottom: 7,
         marginLeft: 10,
         height: Height* 0.05,
         width: Width* 0.25,
         justifyContent:'center',
         alignItems:'center'
         
      },
      textInputStyle:{
        marginLeft:7,
         backgroundColor:'#fff',
         width: Width* 0.6,
         height: Height* 0.05
      },
      searchButton:{
        justifyContent:'center',
        backgroundColor:'#fff',
          height: Height* 0.05,
          width: Width * 0.06
      }
    
});

export default styles;