import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
    
      },
      itemContainer:{
        
          alignItems:'center',
          width: Width* 0.316,
          height: Height* 0.2,
          backgroundColor: "#fa6e0d",
          marginHorizontal: 3,
          marginTop: 10,
          borderRadius:15
      },
      ImageView:{
          width: Width* 0.3,
          height: Height*0.12,
          borderRadius: 15
      },

      Imagecontainer:{
          width: Width* 0.4,
          height: Height* 0.17
      },

      //listHeader

      listHeadercontainer:{
        marginTop:10,
        backgroundColor: 'white',

          flexDirection: 'row',
      },
      ViewView:{
          width: Width* 0.5
      },



  


      //text

      text1: {
        fontSize: RFValue(20),
        marginTop:5,
        marginBottom:10,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: RFValue(14),
        color: "#fff",
        textAlign:'center'
    }
      

});

export default styles;