// ./screens/Home.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon as Icons from 'react-native-vector-icons/IonIcons'
import styles from './styles';
const index = ({ navigation }) => {
	return (
		<View style={styles.MainContainer}>
			<View style={styles.headerView}>
				<View style={{ justifyContent: 'center', marginLeft: 5 }}>
					<Icon name="arrow-back" size={30} color="#fff" onPress={() => navigation.navigate('Home')} />
				</View>
				<View style={styles.inputView}>
					<TextInput label="Hello" style={styles.textInputStyle1} placeholderTextColor="gray" placeholder="Search for product" />
				</View>
				<View style={{ justifyContent: 'center' }}>
					<Icon name="store" size={30} color="#fff" />
				</View>
			</View>
		</View>
	);
};

export default index;
