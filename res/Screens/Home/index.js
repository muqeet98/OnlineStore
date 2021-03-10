// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput,ScrollView} from "react-native";
import HeaderView from './HeaderView/index';
import Category from './Category/index';
import ShopCategory from "./ShopCategory/index";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
const Home = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
             <HeaderView navigation={navigation}/> 
      <ScrollView>

       <Category navigation={navigation}/>
       <ShopCategory navigation={navigation}/>
       <Category navigation={navigation}/>
    </ScrollView>
    </View>
  );
};

export default Home;