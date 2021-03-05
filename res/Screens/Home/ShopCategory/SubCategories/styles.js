import React from "react";
import { StyleSheet, Dimensions,TouchableHighlight } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
      TabStyle:{
          marginTop:15,
          marginHorizontal: 5,
          paddingLeft: 0,
          paddingRight:10,
          height: Height* 0.06,
          borderColor: "red",
          borderWidth: 1,
          justifyContent:'center',
          alignItems:'center',
          borderRadius: 20
    
      },
      headerImage:{
        width: Width,
        height: Height*0.16
      },
      itemContainer:{
          marginTop: 10,
          justifyContent:'center',
        alignItems:'center',
        width: Width,
        height: Height* 0.25,
      //   borderColor:'red',
      //   borderWidth: 2,
        backgroundColor: "white"
    },
    ImageView:{
        width: Width* 0.4,
        height: Height*0.16
    },
    Imagecontainer:{
        width: Width* 0.4,
        height: Height* 0.17
    },
    textContainer:{
        alignSelf:'flex-start',
        paddingLeft: 10,
        height: Height* 0.09,
        width: Width * 0.4
    },
    buttonContainer:{
      //   width: Width * 0.4,
      //   height: Height* 0.05,
      padding:10,
        borderRadius: 30,
        flexDirection:'row',
      //   borderWidth: 1,
      //   borderColor: "red"
    },
    
    AddButton:{
       
        alignItems:"center",
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: '#ec6805',
        width:Width* 0.3,
        height: Height*0.04
    },

    AddButton2:{
       
      alignItems:"center",
      borderRadius: 3,
      justifyContent: 'center',
      backgroundColor: '#ec6805',
      width:Width* 0.08,
      height: Height*0.04
  },

  countTextContainer:{
      width: Width* 0.22,
      height: Height* 0.04,
      alignItems:'center',
      justifyContent:'center'
  },


    //listHeader

    listHeadercontainer:{
      
       justifyContent: 'center',
      //   borderColor: 'red',
      //   borderWidth: 1,
        flexDirection: 'row',
    },
    ViewView:{
        width: Width* 0.5
    },



    seeAll:{
        width: Width * 0.2,
        height: Height* 0.04,
        borderColor: '#ec6805',
        borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5,
        borderWidth: 1

    },


    //text

    text1: {
      fontSize: RFValue(20),
      marginTop:5,
      marginBottom:10,
  },
  text2: {
      fontSize: RFValue(14),
      color: "#ec6805"
  },
  text3: {
      fontSize: RFValue(14),
      color: 'white'
  },

  image: {
    width: Width,
        height: Height*0.16,
        alignItems:'center',
        justifyContent:'center'

  },
  text: {
    color: "#000",
    fontSize: RFValue(28),
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000a0"
  },


    
});

export default styles;