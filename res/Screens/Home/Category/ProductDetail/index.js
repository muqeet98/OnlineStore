import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput,ScrollView} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import ImageSlider from './ImageSlider/index';
import Price from "./Price/index";
const index = ({ navigation }) => {
  return (
    <ScrollView style={styles.MainContainer}>
        <ImageSlider navigation={navigation}/>
        <Price  />
    </ScrollView>
  );
};


export default index;