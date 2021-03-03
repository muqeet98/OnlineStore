

import { createDrawerNavigator, DrawerContentScrollView,DrawerItem,DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';  
import Home from "../Screens/Home/index";
import React from "react";
const Drawer = createDrawerNavigator();




const CustomDrawerContent= ({navigation})=> {
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