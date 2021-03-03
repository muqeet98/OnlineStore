// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity ,TextInput} from "react-native";
import styles from './styles'
const index = ({ navigation }) => {
  console.log("Hello2", navigation);
  return (
    <View style={styles.MainContainer}>
        <View style={styles.InnerView}>
           <View style={styles.rowcontainer}>
               <View>
                   <Text>MRP</Text>
               </View>
               <View>
                   <Text>157</Text>
               </View>
           </View>

           <View style={styles.rowcontainer}>
               <View>
                   <Text>Product Dicount</Text>
               </View>
               <View>
                   <Text>-50</Text>
               </View>
           </View>

           <View style={styles.rowcontainer}>
               <View>
                   <Text>Delivery Charges</Text>
               </View>
               <View>
                   <Text>Free</Text>
               </View>
           </View>

           <View style={styles.rowcontainer}>
               <View>
                   <Text>MRP</Text>
               </View>
               <View>
                   <Text>MRP</Text>
               </View>
           </View>
        </View>
    </View>
  );
};


export default index;