import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
      },
      header: {
          flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 20,
        flexDirection:'row'

      },

      headerText: {
        fontSize: 16,
        fontWeight: '500',
      },
      separator: {
        height: 0.5,
        marginLeft:10,
        backgroundColor: '#808080',
        width: '100%',
 
      },
      text: {
        fontSize: RFValue(16),
        color: '#606070',
        padding: 10,
      },
      content: {
        width: Width* 0.32,
        height: Height* 0.17,
        justifyContent:'center',
        alignItems:'center',
       
        backgroundColor: '#fff',
      },

      headercontainer:{
          flexDirection:'row',
          
      },
      itemImage:{
          width: Width* 0.3,
          height: Height* 0.13,
          borderRadius: 20
      },
      itemImageSubC:{
        width: Width* 0.25,
        height: Height* 0.1,
        borderRadius: 10
    },


      text1: {
        fontSize: RFValue(18),
        marginBottom:5
    },
    text2: {
        fontSize: RFValue(14),
        color: "#ec6805"
    }
    
});

export default styles;