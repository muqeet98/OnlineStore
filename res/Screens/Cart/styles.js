import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems:'center'
      },
      InnerView:{
          marginTop: 13, 
          width: Width* 0.95,
          backgroundColor: 'white',
          borderColor:'gray',
          borderWidth: 0.3
      },
      rowcontainer:{
           padding: 10,
           flexDirection:'row',
           justifyContent:'space-between'
      },

      Bottomcontainer:{
          position: 'absolute',
          bottom: 0,
          width: Width,
          height: Height* 0.06,
      },
      BottomButton:{
        width: Width,
        height: Height* 0.06,
        borderColor: "green",
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "green"
      },

      text1:{
          fontSize: RFValue(16)
      },
      text2: {
          fontSize: RFValue(18),
          color:'white'
      },
      text3: {
        fontSize: RFValue(13),
        color: '#343434'
      },
      text4: {
        fontSize: RFValue(13),
        color: '#fff'
      },
      seperatorContainerl:{
        backgroundColor:'gray',
        height: 0.5,
        width: Width *0.95,
      },

      //TiP CSS

      TipContainer:{
        marginTop: 13, 
        width: Width* 0.95,
        height: Height * 0.25,
        backgroundColor: 'white',
        borderColor:'gray',
        borderWidth: 0.3
    },
    deliverImage:{
        width: Width* 0.2,
        height: Height* 0.1
    },

    TipRow:{
        padding: 10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: "#faddd1"
   },
   TipButtonsContainer:{
    padding: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
},

seeAll:{
    // width: Width * 0.2,
    paddingLeft: 10,
    paddingRight: 10,
    height: Height* 0.05,
    borderColor: '#ec6805',
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 5,
    borderRadius: 5,

},

seeAllSelected:{
    // width: Width * 0.2,
    paddingLeft: 10,
    paddingRight: 10,
    height: Height* 0.05,
    borderColor: '#ec6805',
    backgroundColor: '#ec6805',
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 5,
    borderRadius: 5,

},
inputStyle:{

    height: Height* 0.05,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#ec6805',
    borderWidth:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 5,
    borderRadius: 5,


}
    
});

export default styles;