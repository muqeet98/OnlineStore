import React from 'react';
import {Dimensions, StyleSheet, Image, View} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import

// ROUTES
import DrawerNavigator from './drawer';
import Login from '../Screens/Login/index';
import ProductDetail from '../Screens/Home/Category/ProductDetail/index';
import CategoriesHeader from '../Screens/Home/HeaderView/CategoriesHeader/index';
import Cart from '../Screens/Cart/index';
import SubCategories from '../Screens/Home/ShopCategory/SubCategories/index';

import CustomerSupport from '../Screens/CustomerSupport/index';
import SearchProduct from '../Screens/Home/HeaderView/SearchProduct/index';
import SearchLocation from '../Screens/Home/HeaderView/SearchLocation/index';
import AboutUs from '../Screens/AboutUs/index';
import PrivacyPolicy from '../Screens/AboutUs/PrivacyPolicy/index';
import TermsAndCondition from '../Screens/AboutUs/TermsAndCondition/index'
//Width Height
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

// NAVIGATIONS
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();
// const {navigation} = this.props;

const headerbackgroundcolor = '#000';
const textColor = '#fff';
const headerView = {
  headerStyle: {
    backgroundColor: '#000',
  },

  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
export default function MainTab({navigation}) {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack2.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="CategoriesHeader"
        component={CategoriesHeader}
        options={{
          title: 'Categories',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="SubCategories"
        component={SubCategories}
        options={{
          title: 'SubCategories',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="CustomerSupport"
        component={CustomerSupport}
        options={{
          title: 'Customer Support',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />

      <Stack2.Screen
        name="SearchProduct"
        component={SearchProduct}
        options={{headerShown: false}}
      />

      <Stack2.Screen
        name="SearchLocation"
        component={SearchLocation}
        options={{headerShown: false}}
      />

      <Stack2.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About Us',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />
      <Stack2.Screen
        name="Privacy"
        component={PrivacyPolicy}
        options={{
          title: 'Privacy and Policy',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />
      <Stack2.Screen
        name="Terms"
        component={TermsAndCondition}
        options={{
          title: 'Terms and Conditions',
          headerStyle: {backgroundColor: headerbackgroundcolor},
          headerTintColor: textColor,
        }}
      />
    </Stack2.Navigator>
  );
}
