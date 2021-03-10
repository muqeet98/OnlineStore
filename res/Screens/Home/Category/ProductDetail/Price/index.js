// ./screens/Home.js

import React,{useState} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
const index = ({ navigation }) => {
	//    console.log("gg", props);
	const [ dataD ] = useState(data);
	const [ count, setCount ] = useState(0);


    const addCart =() => {
        console.log(count);
        setCount(count+1);
        console.log(count);
    }
    const removeCart =() =>{
        setCount(count-1)
    }
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
					<View style={styles.buttonContainer}>
                    {
                    count== 0? 
                    <View>
					<TouchableOpacity style={styles.AddButton} onPress={addCart}>
						<Text style={styles.text3}>ADD</Text>
					</TouchableOpacity>
                    </View>
                    :
                   <View style={{flexDirection: 'row'}}>
                    <View>
                    <TouchableOpacity style={styles.AddButton2} onPress={removeCart}>
						<Text style={styles.text3}>-</Text>
					</TouchableOpacity>
                    </View>
                    <View style={styles.countTextContainer} >
                        <Text>{count}</Text>
                    </View>
                    </View>
                    
                  }

                    <View>
                    <TouchableOpacity style={styles.AddButton2} onPress={addCart}>
						<Text style={styles.text3}>+</Text>
					</TouchableOpacity>
                    </View>
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

const data = [
	{
		id: '1',
		price: '15',
		name: 'Salimbasmati faislabadi rice ',
		pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
	},

	{
		id: 2,
		price: '40',
		name: 'floor',
		pic: 'https://cdn.metro-online.pk/dashboard/prod-pic/LHE-01262/12620282-0-M.jpg?5'
	},

	{
		id: 3,
		price: '60',
		name: 'tea',
		pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
	},
	{
		id: 4,
		price: '15',
		name: 'rice',
		pic: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/How-to-boil-rice-square-FS-6126-500x500.jpg'
	}
];