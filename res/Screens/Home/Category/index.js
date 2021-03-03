// ./screens/Home.js

import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
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

const index = ({ navigation }) => {
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

	const itemlist = (item) => {
		console.log('hai', navigation);
		return (
			<View style={styles.itemContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item: item.item })}>
					<View style={styles.Imagecontainer}>
						<Image source={{ uri: item.item.pic }} style={styles.ImageView} />
					</View>
					<View style={styles.textContainer}>
						<Text>Rs.{item.item.price}</Text>
						<Text>{item.item.name}</Text>
					</View>
				</TouchableOpacity>
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
		);
	};

	const seperator = () => {
		return <View style={{ marginLeft: 15 }} />;
	};

	return (
		<View style={styles.MainContainer}>
			<View style={styles.listHeadercontainer}>
				<View>
					<Text style={styles.text1}>Best Savers</Text>
				</View>
				<View style={styles.ViewView} />
				<View>
					<TouchableOpacity style={styles.seeAll}>
						<Text style={styles.text2}>See all</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<FlatList
					data={dataD}
					renderItem={itemlist}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={seperator}
				/>
			</View>
		</View>
	);
};

export default index;
