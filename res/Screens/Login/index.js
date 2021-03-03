// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity ,TextInput} from "react-native";
import styles from './styles'
const index = ({ navigation }) => {
  console.log("Hello2", navigation);
  return (
    <View style={styles.MainContainer}>
        <View style={styles.InnerView}>
           <View>
             <Text style={{textAlign:'center',marginTop: 15}}>We will send an SMS with a confirmation code to this number</Text>
           </View>

           <View style={styles.inputView}>
             
              <View>
              <TextInput style={styles.textInputcode} placeholder="+92"  />
              </View>
              <View>
              <TextInput style={styles.textInputnumber} placeholder="Phone Number" maxLength={11} keyboardType="numeric"/>
              </View>
            
           </View>

           <View>
             <TouchableOpacity style={styles.buttonStyle}>
                  <Text>Next</Text>
             </TouchableOpacity>
           </View>
        </View>
    </View>
  );
};


export default index;