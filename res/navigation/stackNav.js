
import React from 'react';
import { Dimensions, StyleSheet, Image ,View} from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import

// ROUTES
import DrawerNavigator from "./drawer";
import Login from "../Screens/Login/index";
import ProductDetail from "../Screens/Home/Category/ProductDetail/index";
import CategoriesHeader from "../Screens/Home/HeaderView/CategoriesHeader/index";
import Cart from "../Screens/Cart/index";
import SubCategories from "../Screens/Home/ShopCategory/SubCategories/index";
//Width Height
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

// NAVIGATIONS
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
// const {navigation} = this.props;

export default function MainTab({navigation}) {

	return(
	    <Stack2.Navigator >
		<Stack2.Screen name="Home" component={DrawerNavigator} options={{headerShown: false}} />
	    <Stack2.Screen name="Login" component={Login}/>
		<Stack2.Screen name="ProductDetail" component={ProductDetail}/>
		<Stack2.Screen name="CategoriesHeader" component={CategoriesHeader}/>
		<Stack2.Screen name="Cart" component={Cart}/>
		<Stack2.Screen name="SubCategories" component={SubCategories}/>
	    </Stack2.Navigator>
	);

  }







