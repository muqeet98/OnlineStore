
import React from "react";
import { View, Button, Text, StyleSheet , TouchableOpacity,TextInput,ScrollView} from "react-native";
import styles from "./styles";
const index = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
        <>
          <ScrollView style={styles.ScrollViewcontainer}>
          <View >
            <Text style={styles.text1}>
              About Us
            </Text>
          </View>
          
           <View>
          
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.text2}>
            We provide full-cycle muewvfd mobile app development services. This includes expert business analysis, design and development of your mobile application from idea to launch, integrating the new product into your infrastructure and providing further optimization and scale-up on demand.
            </Text>
          </View>
          </View>
          </ScrollView>
        </>

          <View style={{bottom:0, position:'absolute'}}>
             <View style={styles.buttoncontainer}>
               <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate("Privacy")}>
                 <Text>Privacy Policy</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.buttoncontainer}>
               <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate("Terms")}>
                 <Text>Terms and Conditions</Text>
               </TouchableOpacity>
             </View>
          </View>
    </View>
  );
};

export default index;