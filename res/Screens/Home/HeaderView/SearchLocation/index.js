// ./screens/Home.js

import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon as Icons from 'react-native-vector-icons/IonIcons'
import styles from './styles';
const index = ({ navigation }) => {
    const [value,setValue]=useState('Islamabad Pakistan')
	return (
		<View style={styles.MainContainer}>
			<View style={styles.headerView}>
				<View style={{ justifyContent: 'center', marginLeft: 5 }}>
					<Icon name="arrow-back" size={30} color="#fff" onPress={() => navigation.navigate('Home', {location: value})} />
				</View>
				<View style={styles.inputView}>
					<TextInput label="Hello" style={styles.textInputStyle1} placeholderTextColor="gray" placeholder="Search Location" value={value} onChangeText={text=> setValue(text)} />
				</View>
			</View>

            <TouchableOpacity onPress={()=> navigation.navigate("Home", {location: value})}>
                <Text>Select</Text>
            </TouchableOpacity>
		</View>
	);
};

export default index;
