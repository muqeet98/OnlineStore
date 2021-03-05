// ./screens/Home.js

import React from 'react';
import {
	View,
	Button,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
	FlatList,
	TouchableHighlight,
	Image,
    ImageBackground
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import styles from './styles';
const index = (props, { navigation }) => {
	const { data } = props.route.params;
	const [ data2, setData ] = useState(data);
	console.log(JSON.stringify(data));
	// // console.log(data[1].pic);
	// console.log("GGGG", data[0].products);

	const [ image, setImage ] = useState(data[0].pic);
	const [ product, setProduct ] = useState(data[0].products);
    const [categoryname,setCategoryName]= useState(data[0].val)
	const [ count, setCount ] = useState(0);

	const addCart = () => {
		console.log(count);
		setCount(count + 1);
		console.log(count);
	};
	const removeCart = () => {
		setCount(count - 1);
	};

	const itemlist = (item) => {
		// console.log("Hello Proce", item.item.products);
		return (
			<View>
				<View>
					<TouchableHighlight
						onPress={() => {
							setImage(item.item.pic), setProduct(item.item.products),setCategoryName(item.item.val), console.log(item.item.products);
						}}
						style={styles.TabStyle}
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
					>
						<Text style={{ fontSize: 15, marginLeft: 10 }}>{item.item.val}</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	};

	const Products = (item) => {
		return (
			<View style={styles.itemContainer}>
				<View style={{ flexDirection: 'row' }}>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item: item.item })}>
							<View style={styles.Imagecontainer}>
								<Image source={{ uri: item.item.pic }} style={styles.ImageView} />
							</View>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { item: item.item })}>
							{/* <View style={styles.Imagecontainer}>
						<Image source={{ uri: item.item.pic }} style={styles.ImageView} />
					</View> */}
							<View style={styles.textContainer}>
								<Text>Rs.{item.item.price}</Text>
								<Text>{item.item.name}</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.buttonContainer}>
							{count == 0 ? (
								<View>
									<TouchableOpacity style={styles.AddButton} onPress={addCart}>
										<Text style={styles.text3}>ADD</Text>
									</TouchableOpacity>
								</View>
							) : (
								<View style={{ flexDirection: 'row' }}>
									<View>
										<TouchableOpacity style={styles.AddButton2} onPress={removeCart}>
											<Text style={styles.text3}>-</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.countTextContainer}>
										<Text>{count}</Text>
									</View>
								</View>
							)}

							<View>
								<TouchableOpacity style={styles.AddButton2} onPress={addCart}>
									<Text style={styles.text3}>+</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
		);
	};

	return (
        <>
        <View>
        <FlatList data={data} renderItem={itemlist} horizontal showsHorizontalScrollIndicator={true} />
        </View>
		<ScrollView style={{marginTop:10}}>

            <ImageBackground source={{uri: image }} style={styles.image}>
				    
								<Text style={styles.text}>{categoryname}</Text>
	
					</ImageBackground>
		
				<FlatList
					data={product}
					renderItem={Products}
					// horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			
		</ScrollView>
        </>
	);
};

export default index;
