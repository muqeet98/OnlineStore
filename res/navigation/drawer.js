
import { Share, View, Button } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItem,DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';  
import Home from "../Screens/Home/index";
import React from "react";
const Drawer = createDrawerNavigator();




const CustomDrawerContent= ({navigation})=> {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:'App Link Sharing Testing https://play.google.com/store/apps/dev?id=7064049075652771302',
        url:'https://play.google.com/store/apps/dev?id=7064049075652771302'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
    return (
      <DrawerContentScrollView >

        <DrawerItem
          label="Home"
            onPress={() => { navigation.navigate("Home"), navigation.dispatch(DrawerActions.closeDrawer()); }}
        />
          <DrawerItem
          label="Login"
           onPress={() => { navigation.navigate("Login"),  navigation.dispatch(DrawerActions.closeDrawer());}}
        />
          <DrawerItem
          label="My Addresses"
          // onPress={() => navigation.navigate("LoginForm")}
        />
          <DrawerItem
          label="My Orders"
        //   onPress={() => navigation.navigate("LoginForm")}
        />
          <DrawerItem
          label="My Cart"
          onPress={() =>{ navigation.navigate("Cart"),  navigation.dispatch(DrawerActions.closeDrawer());}}
        />
          <DrawerItem
          label="Wallet"
        //   onPress={() => navigation.navigate("LoginForm")}
        />
          <DrawerItem
          label="Notification"
        //   onPress={() => navigation.navigate("LoginForm")}
        />
          <DrawerItem
          label="Share"
          onPress={() =>{ onShare(),  navigation.dispatch(DrawerActions.closeDrawer());}}
  
        />
         <DrawerItem
          label="Customer Support"
          onPress={() =>{ navigation.navigate("CustomerSupport"),  navigation.dispatch(DrawerActions.closeDrawer());}}
  
        />
         <DrawerItem
          label="About Us"
          onPress={() =>{ navigation.navigate("AboutUs"),  navigation.dispatch(DrawerActions.closeDrawer());}}
  
        />
       


      </DrawerContentScrollView>
    );
  }

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator drawerContent={()=> <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="Home" component={Home} />
         
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;