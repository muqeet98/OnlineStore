// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
const index = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
       <View style={styles.headerView}  >
         <View style={{justifyContent:'center', marginLeft: 5}}>
         <Icon name="menu" size={30} color="#fff" onPress={()=> navigation.toggleDrawer()}/>
       </View>
       <View>
         <View style={styles.inputView}>
           <Text style={{color:"#fff"}}>Delivery Location</Text>
         <TextInput label="Hello" style={styles.textInputStyle1} value="Islamabad Pakistan" />
         
         </View>
        
       </View>
       <View style={{justifyContent:'center'}}>
       <Icon name="menu" size={30} color="#fff" />
       </View>
       </View>

       <View style={styles.headerView}>
         <View>
          <TouchableOpacity style={styles.ButtonStyle} onPress={()=> navigation.navigate("CategoriesHeader")}>
              <Text>Categories</Text>
          </TouchableOpacity>
          </View>
          
          <View>
          <TextInput style={styles.textInputStyle} placeholder="search for Product"  />
          </View>
          <View style={styles.searchButton}>
             <Icon name="search" size={20} color="#000"/>
          </View>
       </View>
      
    </View>
  );
};




export default index;