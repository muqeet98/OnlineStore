// ./screens/Home.js

import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
const index = ({ navigation }) => {
	//    console.log("gg", props);
	return (
		<View>
			<View style={styles.MainContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.text1}>
						{' '}
						Rice from the sargodha. It is pure quality rice. (5kg +1kg + Groffer mother choice)
					</Text>
				</View>
				<View style={styles.priceContainer}>
					<Text style={styles.text2}>Selling Price: </Text>
					<Text style={styles.text3}>Rs 200</Text>
				</View>

				<View
					style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}
				>
					<View>
						<Text>(inclusive of all taxes)</Text>
					</View>
					<View>
						<TouchableOpacity style={styles.AddButton}>
							<Text>ADD</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.unitContainer}>
				<View>
					<Text styles={styles.text3}>Unit</Text>
				</View>
                <View style={styles.unitButtonContainer}>
                  <View>
                  <TouchableOpacity style={styles.seeAll}>
                  <Text style={styles.text2}>500g</Text>
              </TouchableOpacity>
                  </View>
                  <View style={{paddingLeft: 20}} />
                   
                  <View>
                  <TouchableOpacity style={styles.seeAll}>
                  <Text style={styles.text2}>1Kg</Text>
              </TouchableOpacity>
                  </View>
                </View>
			</View>

            <View style={styles.DescriptionContainer}>
				<View >
					<Text styles={styles.text1}>Description</Text>
				</View>
                <View style={styles.DestextContainer}>
                    <Text style={styles.text1}>
                    It's useful when you cannot pass the navigation prop into the component directly, or don't want to ... An ordinary component that is not a screen component will not receive the navigation
                    </Text>
                </View>
               
			</View>
		</View>
	);
};

export default index;
