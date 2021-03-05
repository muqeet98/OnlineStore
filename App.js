/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//route 
import MainTab from "./res/navigation/stackNav";
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },

};
const App: () => React$Node = () => {

  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="Main" >
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{ headerShown: false }}
      />
       
    </Stack.Navigator>
  </NavigationContainer>

  );
};

export default App;
