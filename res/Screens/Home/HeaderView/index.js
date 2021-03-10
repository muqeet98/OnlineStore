// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
const index = ({ navigation }) => {
  // console.log("BBBB", navigation)
  const [value, onChangeText] = React.useState('Islamabad Pakistan 2');
  return (
    <View style={styles.MainContainer}>
       <View style={styles.headerView}  >
         <View style={{justifyContent:'center', marginLeft: 5}}>
         <Icon name="menu" size={30} color="#fff" onPress={()=> navigation.toggleDrawer()}/>
       </View>
       <View>
         <View style={styles.inputView}>
           <Text style={{color:"#fff"}}>Delivery Location</Text>
           <TouchableOpacity onPress={() =>   navigation.navigate("SearchLocation")}>
         <TextInput label="Hello" style={styles.textInputStyle1} placeholder="Islamabad, Pakistan" placeholderTextColor="#fff" editable={false} />
        </TouchableOpacity>
         
         </View>
       </View>
       <View style={{justifyContent:'center'}}>
       <Icon name="store" size={30} color="#fff" onPress={()=> navigation.navigate("Cart")} />
       </View>
       </View>

       <View style={styles.headerView}>
         <View>
          <TouchableOpacity style={styles.ButtonStyle} onPress={()=> navigation.navigate("CategoriesHeader")}>
              <Text>Categories</Text>
          </TouchableOpacity>
          </View>
          
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate("SearchProduct")}>
          <TextInput style={styles.textInputStyle} placeholder="search for Product" editable={false}  />
          </TouchableOpacity>
          </View>
          <View style={styles.searchButton}>
             <Icon name="search" size={20} color="#000" />
          </View>
       </View>
    </View>
  );
};




export default index;