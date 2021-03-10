import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
       flex:1,
       backgroundColor:"white"
      },
      text1: {
        fontSize: RFValue(20),
        marginTop: 10,
        paddingLeft: 10,
        color: "#000",
        fontWeight: "bold",
    },
    text2: {
        fontSize: RFValue(15),
        color: "#000",
        textAlign:'justify'
    },
    text3: {
        fontSize: RFValue(14),
        color: 'white'
    },
    textcontainer:{
       marginTop: 15,
       alignSelf:'center',
       width: Width * 0.9,

    } ,
    buttoncontainer:{

    },
    buttonStyle:{
        width: Width,
        height: Height* 0.07,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft: 15,
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        backgroundColor:"white"

    },

    ScrollViewcontainer:{
        height: Height* 0.83
    }
 
    
});

export default styles;