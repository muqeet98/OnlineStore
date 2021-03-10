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
        fontSize: RFValue(19),
        fontWeight: 'bold',
        color: 'gray'
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 20,
      },
      
      headerText: {
        fontSize: RFValue(16),
        fontWeight: '500',
      },
      separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: Width,
        // marginLeft: 16,
        // marginRight: 16,
      },
      text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
      },
      content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
      },

    
});

export default styles;