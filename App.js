import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Home from "./screens/Home";
import BottomTab from "./BottomTab";
import EditProfile from "./components/EditProfile";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
