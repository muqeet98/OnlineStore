import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
       backgroundColor:'white'
      },

      textContainer:{
          marginTop: 30,
          paddingLeft: 20,
          width: Width*0.93
      },

      text1:{
          fontSize: RFValue(16),
          color: "gray"
      },
      text2:{
          fontSize: RFValue(18),

      },
      text3:{
          fontSize: RFValue(18),
          fontWeight:'bold'
      },
      priceContainer:{
          flexDirection: 'row',
            marginTop: 30,
            paddingLeft: 20,
            width: Width*0.93
      },
      AddButton:{
          width: Width* 0.3,
          height: Height* 0.04,
        // flex: 1,
        alignItems:"center",
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: '#ec6805'
      },


      // Unit View
      unitContainer:{
        backgroundColor:'white',
        paddingTop:20,
        paddingLeft: 15
      },
      unitButtonContainer:{
         flexDirection:'row',
         paddingBottom: 18

      },

      DescriptionContainer:{
          
        backgroundColor:'white',
        marginTop:20,
        paddingLeft: 15
      },
      unitButtonContainer:{
         flexDirection:'row',
         paddingBottom: 18

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

    DestextContainer:{
        paddingBottom: 25
    }


 
    
});

export default styles;