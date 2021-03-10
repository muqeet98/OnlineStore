
import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput,ScrollView} from "react-native";
import styles from "./styles";
const index = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
        
          <ScrollView>
          <View >
            <Text style={styles.text1}>
              Privacy Policy
            </Text>
          </View>
          
         
          
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
               </Text>
          </View>
          </ScrollView>

    </View>
  );
};

export default index;